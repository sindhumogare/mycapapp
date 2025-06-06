sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'bosch.po.managepo',
            componentId: 'POItemObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});