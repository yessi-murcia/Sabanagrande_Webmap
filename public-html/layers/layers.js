var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Aldea_SN_1 = new ol.format.GeoJSON();
var features_Aldea_SN_1 = format_Aldea_SN_1.readFeatures(json_Aldea_SN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldea_SN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldea_SN_1.addFeatures(features_Aldea_SN_1);
var lyr_Aldea_SN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aldea_SN_1, 
                style: style_Aldea_SN_1,
                interactive: true,
                title: '<img src="styles/legend/Aldea_SN_1.png" /> Aldea_SN'
            });
var format_RedVial_SG_2 = new ol.format.GeoJSON();
var features_RedVial_SG_2 = format_RedVial_SG_2.readFeatures(json_RedVial_SG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_SG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_SG_2.addFeatures(features_RedVial_SG_2);
var lyr_RedVial_SG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_SG_2, 
                style: style_RedVial_SG_2,
                interactive: true,
    title: 'RedVial_SG<br />\
    <img src="styles/legend/RedVial_SG_2_0.png" /> Afirmado sólido, dos o más vías<br />\
    <img src="styles/legend/RedVial_SG_2_1.png" /> Revestimiento suelto, transitable solo en verano<br />\
    <img src="styles/legend/RedVial_SG_2_2.png" /> Sendero o vereda<br />\
    <img src="styles/legend/RedVial_SG_2_3.png" /> <br />'
        });
var format_Cabecera_municipal_pto_3 = new ol.format.GeoJSON();
var features_Cabecera_municipal_pto_3 = format_Cabecera_municipal_pto_3.readFeatures(json_Cabecera_municipal_pto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabecera_municipal_pto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabecera_municipal_pto_3.addFeatures(features_Cabecera_municipal_pto_3);
var lyr_Cabecera_municipal_pto_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabecera_municipal_pto_3, 
                style: style_Cabecera_municipal_pto_3,
                interactive: true,
                title: '<img src="styles/legend/Cabecera_municipal_pto_3.png" /> Cabecera_municipal_pto'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Aldea_SN_1.setVisible(true);lyr_RedVial_SG_2.setVisible(true);lyr_Cabecera_municipal_pto_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Aldea_SN_1,lyr_RedVial_SG_2,lyr_Cabecera_municipal_pto_3];
lyr_Aldea_SN_1.set('fieldAliases', {});
lyr_RedVial_SG_2.set('fieldAliases', {'CODIGO': 'CODIGO', 'DESCRIPC': 'DESCRIPC', 'TIPO': 'TIPO', 'Shape_Leng': 'Shape_Leng', });
lyr_Cabecera_municipal_pto_3.set('fieldAliases', {});
lyr_Aldea_SN_1.set('fieldImages', {});
lyr_RedVial_SG_2.set('fieldImages', {'CODIGO': 'TextEdit', 'DESCRIPC': 'TextEdit', 'TIPO': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Cabecera_municipal_pto_3.set('fieldImages', {});
lyr_Aldea_SN_1.set('fieldLabels', {});
lyr_RedVial_SG_2.set('fieldLabels', {'CODIGO': 'inline label', 'DESCRIPC': 'inline label', 'TIPO': 'inline label', 'Shape_Leng': 'no label', });
lyr_Cabecera_municipal_pto_3.set('fieldLabels', {});
lyr_Cabecera_municipal_pto_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});