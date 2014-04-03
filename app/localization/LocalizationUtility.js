(function(){

    var LocalizationUtility = Chaos.Singleton.extend({
        name:'LocalizationUtility'
    });

    LocalizationUtility.localizationHash = [];
    LocalizationUtility.localizedContent = [];

    LocalizationUtility.getContent = function ($sectionKey, $fieldKey){
        var returnValue = (LocalizationUtility.localizationHash[$sectionKey] && LocalizationUtility.localizationHash[$sectionKey][$fieldKey]) ? LocalizationUtility.localizationHash[$sectionKey][$fieldKey] : '';
        if(returnValue == '')
            Chaos.NS.logger.warn($sectionKey+', '+$fieldKey+' was not found in the localization hash');


        return returnValue.replace('®', '<sup>®</sup>').replace('(MD)', '<sup>MD</sup>');
    };

    LocalizationUtility.prepData = function(){
        LocalizationUtility.localizationHash = LocalizationUtility.flattenData();
    };

    LocalizationUtility.flattenData = function(){
        var flattenedMap = [];

        for (var i = LocalizationUtility.localizedContent.length - 1; i >= 0; i--){
            var section = LocalizationUtility.localizedContent[i];
            var fields = [];
            for (var ii = section.fields.length - 1; ii >= 0; ii--){
                var field = section.fields[ii];
                fields[field.key] = field.value;
            };
            flattenedMap[section.key] = fields;
        };

        return flattenedMap;
    };

    LocalizationUtility.repopulate = function($localizedContent){
        LocalizationUtility.localizedContent = $localizedContent;
        LocalizationUtility.prepData();
        new Chaos.NS.LocalizationProxyEvent(Chaos.NS.LocalizationEvent.REPOPULATED).dispatch();
    };

    LocalizationUtility.initialized = false;

    Chaos.NS.LocalizationUtility = LocalizationUtility;
}());