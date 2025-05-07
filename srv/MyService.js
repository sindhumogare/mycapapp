const cds = require('@sap/cds');

module.exports = function(srv){

    //implementation
   srv.on('api', (req, res) => {
       return 'Hello Amigo:, your name is ' + req.data.name;
    });

    const { employees } = cds.entities('sindhu.db.master');

    srv.on('READ', 'EmployeeSrv', async (req,res)=>{
    let tx = await cds.tx(req);
    let allRecords = await tx.run(SELECT.from(employees).limit(5));
    const updatedRecords = allRecords.map(record => ({
        ...record,
        salaryAmount : record.salaryAmount * 0.55
    }));
    return updatedRecords;
    });
}
