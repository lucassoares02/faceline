function carregarJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

document.addEventListener('DOMContentLoaded', function () {
    carregarJSON('data.json', function (dados) {

        var descricaoElemento = document.getElementById('descricao');
        var tituloHeader1Elemento = document.getElementById('titulo_header_1');
        var tituloHeader2Elemento = document.getElementById('titulo_header_2');
        var tituloPaginaElemento = document.getElementById('titulo_pagina');
        var beneficio1Elemento = document.getElementById('beneficio1');
        var beneficio2Elemento = document.getElementById('beneficio2');
        var beneficio3Elemento = document.getElementById('beneficio3');
        var beneficio4Elemento = document.getElementById('beneficio4');
        var justificativa1Elemento = document.getElementById('justificativa1');
        var justificativa2Elemento = document.getElementById('justificativa2');
        var justificativa3Elemento = document.getElementById('justificativa3');
        var justificativa4Elemento = document.getElementById('justificativa4');

        var tituloCard1Elemento = document.getElementById('titulo-card1');
        var tituloCard2Elemento = document.getElementById('titulo-card2');
        var tituloCard3Elemento = document.getElementById('titulo-card3');
        var subtituloCard1Elemento = document.getElementById('subtitulo-card1');
        var subtituloCard2Elemento = document.getElementById('subtitulo-card2');
        var subtituloCard3Elemento = document.getElementById('subtitulo-card3');

        var descricao2Elemento = document.getElementById('descricao2');
        var iframe = document.getElementById('video');
        var justificativa5Elemento = document.getElementById('justificativa5');
        var justificativa6Elemento = document.getElementById('justificativa6');
        var justificativa7Elemento = document.getElementById('justificativa7');
        var justificativa8Elemento = document.getElementById('justificativa8');
        var descricao1Elemento = document.getElementById('descricao1');
        var descricao3Elemento = document.getElementById('descricao3');
        var descricao4Elemento = document.getElementById('descricao4');
        var justificativa9Elemento = document.getElementById('justificativa9');
        var justificativa10Elemento = document.getElementById('justificativa10');
        var tituloCard4Elemento = document.getElementById('titulo-card4');
        var tituloCard5Elemento = document.getElementById('titulo-card5');
        var tituloCard6Elemento = document.getElementById('titulo-card6');
        var tituloCard7Elemento = document.getElementById('titulo-card7');
        var subtituloCard4Elemento = document.getElementById('subtitulo-card4');
        var subtituloCard5Elemento = document.getElementById('subtitulo-card5');
        var subtituloCard6Elemento = document.getElementById('subtitulo-card6');
        var subtituloCard7Elemento = document.getElementById('subtitulo-card7');

        var justificativa11Elemento = document.getElementById('justificativa11');
        var justificativa12Elemento = document.getElementById('justificativa12');
        var descricao5Elemento = document.getElementById('descricao5');
        var descricao6Elemento = document.getElementById('descricao6');

        var justificativa13Elemento = document.getElementById('justificativa13');
        var justificativa14Elemento = document.getElementById('justificativa14');
        var descricao7Elemento = document.getElementById('descricao7');

        var justificativa15Elemento = document.getElementById('justificativa15');
        var justificativa16Elemento = document.getElementById('justificativa16');
        var descricao8Elemento = document.getElementById('descricao8');

        var comentario1Elemento = document.getElementById('comentario1');
        var comentario2Elemento = document.getElementById('comentario2');
        var comentario3Elemento = document.getElementById('comentario3');
        var comentario4Elemento = document.getElementById('comentario4');
        var endereco1Elemento = document.getElementById('endereco1');
        var endereco2Elemento = document.getElementById('endereco2');
        var endereco3Elemento = document.getElementById('endereco3');
        var endereco4Elemento = document.getElementById('endereco4');

        var subtitle1Offer1Elemento = document.getElementById('subtitle_offer1');
        var benefits1Offer1Elemento = document.getElementById('benefits1_offer1');
        var benefits2Offer1Elemento = document.getElementById('benefits2_offer1');
        var benefits3Offer1Elemento = document.getElementById('benefits3_offer1');
        var portionOffer1Elemento = document.getElementById('portion_offer1');
        var valueOffer1Elemento = document.getElementById('value_offer1');
        var valueOffer1CentsElemento = document.getElementById('value_offer1_cents');
        var incashOffer1Elemento = document.getElementById('incash_offer1');

        var subtitle2Offer1Elemento = document.getElementById('subtitle_offer2');
        var benefits1Offer2Elemento = document.getElementById('benefits1_offer2');
        var benefits2Offer2Elemento = document.getElementById('benefits2_offer2');
        var portionOffer2Elemento = document.getElementById('portion_offer2');
        var valueOffer2Elemento = document.getElementById('value_offer2');
        var valueOffer2CentsElemento = document.getElementById('value_offer2_cents');
        var incashOffer2Elemento = document.getElementById('incash_offer2');

        var subtitle3Offer1Elemento = document.getElementById('subtitle_offer3');
        var benefits1Offer3Elemento = document.getElementById('benefits1_offer3');
        var benefits2Offer3Elemento = document.getElementById('benefits2_offer3');
        var portionOffer3Elemento = document.getElementById('portion_offer3');
        var valueOffer3Elemento = document.getElementById('value_offer3');
        var valueOffer3CentsElemento = document.getElementById('value_offer3_cents');
        var incashOffer3Elemento = document.getElementById('incash_offer3');


        descricaoElemento.textContent = dados.descricao;

        tituloHeader1Elemento.textContent = dados.titulo_header_1;
        tituloHeader2Elemento.textContent = dados.titulo_header_2;
        tituloPaginaElemento.textContent = dados.titulo_pagina;
        beneficio1Elemento.textContent = dados.beneficio1;
        beneficio2Elemento.textContent = dados.beneficio2;
        beneficio3Elemento.textContent = dados.beneficio3;
        beneficio4Elemento.textContent = dados.beneficio4;
        justificativa1Elemento.textContent = dados.justificativa1;
        justificativa2Elemento.textContent = dados.justificativa2;
        justificativa3Elemento.textContent = dados.justificativa3;
        justificativa4Elemento.textContent = dados.justificativa4;

        tituloCard1Elemento.textContent = dados.titulo_card1;
        tituloCard2Elemento.textContent = dados.titulo_card2;
        tituloCard3Elemento.textContent = dados.titulo_card3;
        subtituloCard1Elemento.textContent = dados.subtitulo_card1;
        subtituloCard2Elemento.textContent = dados.subtitulo_card2;
        subtituloCard3Elemento.textContent = dados.subtitulo_card3;

        descricao2Elemento.textContent = dados.descricao2;
        iframe.src = dados.video;

        justificativa5Elemento.textContent = dados.justificativa5;
        justificativa6Elemento.textContent = dados.justificativa6;
        justificativa7Elemento.textContent = dados.justificativa7;
        justificativa8Elemento.textContent = dados.justificativa8;
        descricao1Elemento.textContent = dados.descricao1;
        descricao3Elemento.textContent = dados.descricao3;
        descricao4Elemento.textContent = dados.descricao4;
        justificativa9Elemento.textContent = dados.justificativa9;
        justificativa10Elemento.textContent = dados.justificativa10;

        tituloCard4Elemento.textContent = dados.titulo_card4;
        tituloCard5Elemento.textContent = dados.titulo_card5;
        tituloCard6Elemento.textContent = dados.titulo_card6;
        tituloCard7Elemento.textContent = dados.titulo_card7;
        subtituloCard4Elemento.textContent = dados.subtitulo_card4;
        subtituloCard5Elemento.textContent = dados.subtitulo_card5;
        subtituloCard6Elemento.textContent = dados.subtitulo_card6;
        subtituloCard7Elemento.textContent = dados.subtitulo_card7;

        justificativa11Elemento.textContent = dados.justificativa11;
        justificativa12Elemento.textContent = dados.justificativa12;
        descricao5Elemento.textContent = dados.descricao5;
        descricao6Elemento.textContent = dados.descricao6;

        justificativa13Elemento.textContent = dados.justificativa13;
        justificativa14Elemento.textContent = dados.justificativa14;
        descricao7Elemento.textContent = dados.descricao7;

        justificativa15Elemento.textContent = dados.justificativa15;
        justificativa16Elemento.textContent = dados.justificativa16;
        descricao8Elemento.textContent = dados.descricao8;

        comentario1Elemento.textContent = dados.comentario1;
        comentario2Elemento.textContent = dados.comentario2;
        comentario3Elemento.textContent = dados.comentario3;
        comentario4Elemento.textContent = dados.comentario4;
        endereco1Elemento.textContent = dados.endereco1;
        endereco2Elemento.textContent = dados.endereco2;
        endereco3Elemento.textContent = dados.endereco3;
        endereco4Elemento.textContent = dados.endereco4;

        subtitle1Offer1Elemento.textContent = dados.subtitle_offer1;
        benefits1Offer1Elemento.textContent = dados.benefits1_offer1;
        benefits2Offer1Elemento.textContent = dados.benefits2_offer1;
        benefits3Offer1Elemento.textContent = dados.benefits3_offer1;
        portionOffer1Elemento.textContent = dados.portion_offer1;
        valueOffer1Elemento.textContent = dados.value_offer1;
        valueOffer1CentsElemento.textContent = dados.value_offer1_cents;
        incashOffer1Elemento.textContent = dados.incash_offer1;

        subtitle2Offer1Elemento.textContent = dados.subtitle_offer2;
        benefits1Offer2Elemento.textContent = dados.benefits1_offer2;
        benefits2Offer2Elemento.textContent = dados.benefits2_offer2;
        portionOffer2Elemento.textContent = dados.portion_offer2;
        valueOffer2Elemento.textContent = dados.value_offer2;
        valueOffer2CentsElemento.textContent = dados.value_offer2_cents;
        incashOffer2Elemento.textContent = dados.incash_offer2;

        subtitle3Offer1Elemento.textContent = dados.subtitle_offer3;
        benefits1Offer3Elemento.textContent = dados.benefits1_offer3;
        benefits2Offer3Elemento.textContent = dados.benefits2_offer3;
        portionOffer3Elemento.textContent = dados.portion_offer3;
        valueOffer3Elemento.textContent = dados.value_offer3;
        valueOffer3CentsElemento.textContent = dados.value_offer3_cents;
        incashOffer3Elemento.textContent = dados.incash_offer3;
    });
});
