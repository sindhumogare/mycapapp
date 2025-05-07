using { sindhu.db.master, sindhu.db.transaction, cappo.cds.CDSViews } from '../db/datamodel';
using { cappo.cds } from '../db/CDSViews';

service CatalogService @(path: 'CatalogService' ) {
entity EmployeeSet as projection on master.employees;
entity AddressSet as projection on master.address;
entity businessPartner as projection on master.businesspartner;
entity ProductSet as projection on master.product;
entity POs as projection on transaction.purchaseorder
actions{
    action boost() returns POs;
} 
//function changeAmount() returns POs;

entity POItem as projection on transaction.poitems;

function getLargestOrder() returns POs;
//entity CDSSet as projection on cds.CDSViews.ProductView;

}
