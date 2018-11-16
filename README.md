# Single Related List
Lightning component for displaying a list of Salesforce records that are related to a parent record with a lookup or master-detail relationship.

[Install the package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F000003i8BvQAI)

The component configuration fields are:
- **recordId** - Id of parent record (Required)
- **sobjectApiName** - Name of parent sobject (Required)
- **relatedFieldApiName** - Name of lookup or master-detail field on child sobject (Required)
- **sortedBy** - Name of field used for sorting (Required)
- **sortedDirection** -  ASC or DESC for ascending/descending directions of sorting (Optional)
- **fields** - List of API Names for displaying (Required)
- **columns** - Array of the columns object that's used to define the data types (Required). For data types [read datatable specification](https://developer.salesforce.com/docs/component-library/bundle/lightning:datatable/specification) 
- **customActions** - List of actions in action menu (Optional). Edit and Delete are default.
- **onRowActionHandler** - The action triggered when a row action is clicked. It overrides standard handler (Optional)
- **numberOfRecords** - number of records in a list. Default is 6 (Optional)

![](realtedList.gif)
