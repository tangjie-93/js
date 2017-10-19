/*格式化日期*/
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分钟
		"s+": this.getSeconds(), //秒钟
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S+": this.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, this.getFullYear().toString());
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (o[k].length === 1) ? (o[k]) : ("00" + o[k]).substr(o[k].toString().length));
		}
	}
	return fmt;
}
function formatTime(timeValue)
{
	if(Math.abs(timeValue)<10)
	{
		return "0"+timeValue;
	}else{
		return timeValue;
	}
	
}
/*
 *初始化页面时间
 * startControl 开始时间控件
 * endControl 结束时间控件
 * datetype day or hour
 */

function timeSelInit(startControl, endControl, datetype) {
	var startTime = new Date();
	var endTime = new Date();
	if(datetype === "day") {
		startTime.setHours(startTime.getHours() - 24);
		$("#" + startControl).datebox({
			value: startTime.Format("yyyy-MM-dd"),
			required: true,
			showSeconds: false
		});
		$("#" + endControl).datebox({
			value: endTime.Format("yyyy-MM-dd"),
			required: true,
			showSeconds: false
		});
	} else {
		startTime.setHours(0);
		startTime.setMinutes(0);
		endTime.setMinutes(0);
		var starttime = startTime.Format("yyyy-MM-dd hh:mm");
		var endtime = endTime.Format("yyyy-MM-dd hh:mm")
		$("#" + startControl).datetimebox({
			value: starttime,
			required: true,
			showSeconds: false
		});
		$("#" + endControl).datetimebox({
			value: endtime,
			required: true,
			showSeconds: false
		});
	}

}

			/*序列化表单中键值对象(这是个工具函数)*/
			//将{name:"region",value:"成都市"}转化为{region:"成都市"}  o[this['name']]=region
			serializeObject = function(form) {
				var o = {};
				$.each(form.serializeArray(), function(index) {
					if(o[this["name"]]) {
						o[this["name"]] = o[this["name"]] +","+ this["value"];
					} else {
						o[this["name"]] = this["value"];
					}
				});

			}