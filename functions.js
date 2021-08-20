function onload(){
    addListeners();
    refreshLabels();
    buildTabInterface( 'mine' );
    buildTabInterface( 'smelt' );
    noDrag();
    ouroboros();
    fillWeaponsArmor();
}

function ouroboros(){
    loop = setTimeout(() => {
        refreshLabels();
        pushProgress('mine');
        pushProgress('smelt');
        ouroboros();
    }, 1000 ); 
}

function noDrag(){
    var imgs = document.getElementsByTagName('img')
    for( let i = 0; i < imgs.length; i++ ){
        imgs[i].setAttribute('draggable', false);
    }
}

function pushProgress( category ){
    var selection = "." + category
    var categories = document.querySelectorAll( selection );
    for( let i = 0; i < categories.length; i++ ){
        var type = categories[i].getAttribute( `data-${translate[category]}` )
        var progressTarget = document.getElementById( `${type}${titleCase( category )}Progress` )
        var currentProgress = parseFloat( progressTarget.style.width )
        var newProgress = 0
        if( workforce[category][type] !== undefined && workforce[category][type] !== 0 ) 
        { newProgress = currentProgress + ( 1 + Math.log( workforce[category][type] , 5 ) ) * 5 / rates[translate[category]][type]; }
        progressTarget.style = `width: ${newProgress}%; transition: width 1s ease 0s;`;
        // progressTarget.style.width = newProgress + '%';
        if( newProgress >= 100 ){ 
            progressTarget.style = `width: 100%; transition: width 0.75s ease 0s;`;
            collect( category, type, progressTarget )
        }
    }
}

function collect( category, type, progressTarget ){
    setTimeout(function() {
        havable[translate[category]][type]++;
        progressTarget.style = `width: 0%; transition: width 0s ease 0s;`;
        refreshLabels();
    }, 750 );
}

function refreshLabels(){
    document.getElementById("jerks").innerHTML = commaNumber( workforce.unassigned );
    document.getElementById("coin").innerHTML = abbridgeNumber( havable.coin );
    for( key in translate ){
        var secondOrder = translate[key];
        var xLabels = document.querySelectorAll(`[data-label='${secondOrder}']`);
        for( let i = 0; i < xLabels.length; i++ ){
            var type = xLabels[i].getAttribute(`data-${secondOrder}-type`);
            xLabels[i].innerHTML = abbridgeNumber( havable[secondOrder][type] );
        }
        for( key in havable[secondOrder] ){
            var topBarElement = `${key}${titleCase( secondOrder )}Panel`;
            if( havable[secondOrder][key] > 0 ){
                document.getElementById(topBarElement).classList.remove("noDisplay");
            }
        }
    }
}

function addListeners(){
    var tabs = document.querySelectorAll(".tab");
    for( let i = 0; i < tabs.length; i++ ){
        tabs[i].addEventListener("mousedown", function(){activateTab(this)});
    }
}

function activateTab( element ){
    var tabs = document.querySelectorAll(".tab");
    var tabContents = document.querySelectorAll(".tabContents");
    for( let i = 0; i < tabs.length; i++ ){
        tabs[i].classList.remove("active");
        tabs[i].children[0].classList.add("silhouette");
    }
    for( let i = 0; i < tabContents.length; i++ ){
        tabContents[i].classList.add("noDisplay");
    }
    element.classList.add("active")
    element.children[0].classList.remove("silhouette");
    var content = element.getAttribute("id") + 'Contents';
    document.getElementById(content).classList.remove("noDisplay");
}

function buildTabInterface( type ){
    var secondOrder = translate[type]
    var xHTML = ''
    var xPaneHTML = '<div class="miniTopPanel" id="' + secondOrder  + 'Pane">'
    for( key in havable[secondOrder] ){
        xPaneHTML += 
        `<div class="fitDivs noDisplay" id="${key}${titleCase( secondOrder )}Panel">
            <div class="block">
                <img src="./glyphs/${key}${titleCase( secondOrder )}.png" class="smallImg">
            </div>
            <div class="block" id="${key}${titleCase( secondOrder )}HowMany" data-label="` + secondOrder + `" data-` + secondOrder + `-type="` + key + `">
                0
            </div>
        </div>`
    }
    xPaneHTML += `</div>`
    for( key in havable[secondOrder] ){
        xHTML +=
        `<div class="${titleCase( type )}" data-${secondOrder}="${key}" id="${key}${titleCase( type )}">
            <div class="jerkBox">
                <img src="./glyphs/minus.png" class="tinyButton topLeft">
                <img src="./glyphs/plus.png" class="tinyButton topRight">
                <img src="./glyphs/jerk${titleCase( type )}.png" class="medImg left silhouette">
                <div id="${key}${titleCase( type )}Assigned" class="assignedOverlay">0</div>
            </div>
            <div class="progressBox ${key} ${secondOrder}Bg">
                <div class="progress" id="${key}${titleCase ( type )}Progress" style="width: 0%;"></div>
                <img src="./glyphs/${key}${titleCase( secondOrder )}.png" class="medImg progressCherry right">
            </div>
        </div>`
    }
    document.getElementById( `${type}Contents` ).innerHTML = xPaneHTML + xHTML;
    var x = document.querySelectorAll( "." + type )
    for( let i = 0; i < x.length; i++ ){
        var minusTimer;
        var minusCount = 0;
        x[i].children[0].children[0].addEventListener("mousedown", function(){
            assignWorker(type, x[i].getAttribute(`data-${secondOrder}`), 'minus');
            minusTimer = setInterval(function(){
                minusCount++;
                if( minusCount > 4 ){
                    assignWorker(type, x[i].getAttribute(`data-${secondOrder}` ), 'minus');
                }
            }, 100);
        });

        var plusTimer;
        var plusCount = 0;
        x[i].children[0].children[1].addEventListener("mousedown", function(){
            assignWorker(type, x[i].getAttribute(`data-${secondOrder}` ), 'plus');
            plusTimer = setInterval(function(){
                plusCount++;
                if( plusCount > 4 ){
                    assignWorker(type, x[i].getAttribute(`data-${secondOrder}` ), 'plus');
                }
            }, 100);
        window.addEventListener("mouseup", function(){ clearInterval( plusTimer ); plusCount = 0; clearInterval( minusTimer ); minusCount = 0; } );
        window.addEventListener("mouseout", function(){ clearInterval( plusTimer ); plusCount = 0; clearInterval( minusTimer ); minusCount = 0; } );
        });
    }
}

function assignWorker( type, subtype, direction ){
    if( workforce[type][subtype] == undefined ){
        workforce[type][subtype] = 0 }
    if( workforce.unassigned <= 0 && direction == "plus" ){}
    else if( workforce[type][subtype] == 0 && direction == "minus" ){}
    else{
        var adjustment = 0;
        if( direction == "plus" ){ adjustment = 1 }
        else if( direction == "minus" ){ adjustment = -1 }
        workforce.unassigned -= adjustment;
        workforce[type][subtype] += adjustment;
    }
    var xIcon = document.getElementById( subtype + titleCase( type ) ).children[0].children[2]
    if( workforce[type][subtype] !== 0 ){ xIcon.classList.remove('silhouette') }
    else { xIcon.classList.add('silhouette') }
    document.getElementById( subtype + titleCase( type ) + 'Assigned' )
        .innerHTML = workforce[type][subtype];
    refreshLabels();
}

function fillWeaponsArmor(){
    var metals = [
        'copper'
        , 'tin'
        , 'bronze'
        , 'iron'
        , 'steel'
        , 'mithril'
        , 'adamantine'
    ]
    var items = [
        'dagger'
        , 'sword'
        , 'axe'
        , 'mace'
        , 'shield'
        , 'helm'
        , 'boots'
        , 'gloves'
        , 'breastplate'
    ]
    html = ''
    for( let i = 0; i < metals.length; i++ ){
        for( let ii = 0; ii < items.length; ii++ ){
            html += `<div class="relative inlineFlex rem1Margin"><div class="${items[ii]} rem3 ${metals[i]}Filter"></div><div class="${items[ii]}Mono rem3 absolute"></div></div>`
        }
    }
    document.getElementById("craftStuffs").innerHTML = html
}