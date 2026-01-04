var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kesesuaian_disslove_1 = new ol.format.GeoJSON();
var features_Kesesuaian_disslove_1 = format_Kesesuaian_disslove_1.readFeatures(json_Kesesuaian_disslove_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesesuaian_disslove_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesesuaian_disslove_1.addFeatures(features_Kesesuaian_disslove_1);
var lyr_Kesesuaian_disslove_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesesuaian_disslove_1, 
                style: style_Kesesuaian_disslove_1,
                popuplayertitle: 'Kesesuaian_disslove',
                interactive: true,
    title: 'Kesesuaian_disslove<br />\
    <img src="styles/legend/Kesesuaian_disslove_1_0.png" /> Bukan Pertanian<br />\
    <img src="styles/legend/Kesesuaian_disslove_1_1.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/Kesesuaian_disslove_1_2.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/Kesesuaian_disslove_1_3.png" /> Pertanian Tananman Tahunan/Perkebunan<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kesesuaian_disslove_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kesesuaian_disslove_1];
lyr_Kesesuaian_disslove_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kesesuaian': 'Kesesuaian', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kesesuaian_disslove_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kesesuaian': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kesesuaian_disslove_1.set('fieldLabels', {'OBJECTID': 'no label', 'Kesesuaian': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kesesuaian_disslove_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});