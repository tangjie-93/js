function getStyle(obj, name) {
	if(obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}

function getByClass(oParent, sClass) {
	var aMent = oParent.getElementsByTagName("*");
	var aEle = [];
	for(var i = 0; i < aMent.length; i++) {
		if(aMent[i].className == sClass) {
			aEle.push(aMent[i]);
		}
	}
	return aEle;
};

function move(obj, attr, iTarget) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		var cur = 0;
		if(attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		} else {
			cur = parseInt(getStyle(obj, attr));
		}
		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(iTarget == cur) {
			clearInterval(obj.timer);
		} else if(attr == 'opacity') {
			obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			obj.style.opacity = (cur + speed) / 100;
		} else {
			obj.style[attr] = cur + speed + 'px';
		}
	}, 30);
}
