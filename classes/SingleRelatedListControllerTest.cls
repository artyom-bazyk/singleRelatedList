@isTest
public class SingleRelatedListControllerTest {
    
    @isTest public static void testInit(){
        Account acc = new Account(Name = 'test');
        insert acc;
        Contact cnt = new Contact(LastName = 'test', AccountId = acc.Id);
        insert cnt;
                
        Map<String, Object> requestMap = new Map<String, Object>(); 
        requestMap.put(SingleRelatedListController.FIELDS_PARAM, 'Name, Title, Email, Phone');
        requestMap.put(SingleRelatedListController.RELATED_FIELD_API_NAME_PARAM, 'AccountId');
        requestMap.put(SingleRelatedListController.RECORD_ID_PARAM, acc.Id);
        requestMap.put(SingleRelatedListController.NUMBER_OF_RECORDS_PARAM, 1);
        requestMap.put(SingleRelatedListController.SOBJECT_API_NAME_PARAM, 'Contact');
        requestMap.put(SingleRelatedListController.SORTED_BY_PARAM, 'Name');
        requestMap.put(SingleRelatedListController.SORTED_DIRECTION_PARAM, 'ASC');
                
        String jsonData = SingleRelatedListController.initData(JSON.serialize(requestMap));
        Map<String, Object> responseMap = (Map<String, Object>)JSON.deserializeUntyped(jsonData);
        List<Object> records = (List<Object>)responseMap.get(SingleRelatedListController.RECORDS_PARAM);
        System.assert(!records.isEmpty());
        String iconName = (String)responseMap.get(SingleRelatedListController.ICON_NAME_PARAM);
        System.assert(String.isNotBlank(iconName));
    }
}