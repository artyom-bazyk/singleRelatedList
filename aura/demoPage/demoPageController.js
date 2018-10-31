({
	init : function(cmp, event, helper) {
        cmp.set('v.customActions', [
            { label: 'Custom action', name: 'custom_action' }
        ])        
        cmp.set('v.opptyColumns', [
            { label: 'OPPORTUNITY  Name', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_top'} },
            { label: 'Stage', fieldName: 'StageName', type: 'text' },
            { label: 'Amount', fieldName: 'Amount', type: 'currency', cellAttributes: { alignment: 'left' } },
            { label: 'Close Date', fieldName: 'CloseDate', type:"date-local", typeAttributes:{month:"2-digit", day:"2-digit"} }
        ])		

        cmp.set('v.caseColumns', [
            { label: 'Case', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'CaseNumber' }, target: '_top'} },
            { label: 'Contact Name', fieldName: 'Contact_LinkName', type: 'url', typeAttributes: {label: { fieldName: "Contact_Name" }, target: '_top'}},
            { label: 'Subject', fieldName: 'Subject', type:"text"},
            { label: 'Priority', fieldName: 'Priority', type: 'text' }
        ])	
        cmp.set('v.contactColumns', [
            { label: 'CONTACT NAME', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_top'} },
            { label: 'Title', fieldName: 'Title', type: 'text' },
            { label: 'Email', fieldName: 'Email', type: 'email'},
            { label: 'Phone', fieldName: 'Phone', type:"phone" }
        ])	    
        
    },
    customHandler : function(cmp, event, helper) {
        alert("It's custom action!")
    },
    
    refreshView : function (component, event, helper) {
         $A.get('e.force:refreshView').fire();
    }    
})