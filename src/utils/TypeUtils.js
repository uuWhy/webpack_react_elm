/*正则表达式集合*/
export const phoneReg=/^1[3-9][0-9]{9}$/;//手机号码

export const telReg=/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/;//座机

export const cardReg=/^\d{15}|\d{18}$/;//身份证

export const pwdReg=/^[a-zA-Z]\w{5,17}$/;//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线

export const postalReg=/[1-9]\d{5}(?!\d)/;//邮政编码

export const QQReg=/^[1-9][0-9]{4,9}$/;//QQ

export const emailReg=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;//email

export const moneyReg=/^\d*(?:\.\d{0,2})?$/;//金额小数点2位

export const URLReg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/;//URL

export const IPReg=/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;//IP

export const dateReg1=/^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/;//date
export const dateReg2=/^(\d{4})-(\d{2})-(\d{2})$/;//date

export const numberReg=/^[0-9]$/;//number

export const englishReg=/^[a-zA-Z]+$/;//english

export const chineseReg=/^[\u4E00-\u9FA5]+$/;//chinese

export const lowerReg=/^[a-z]+$/;//lower

export const upperReg=/^[A-Z]+$/;//upper

export const HTMLReg=/<("[^"]*"|'[^']*'|[^'">])*>/;//HTML

export const passwordReg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;//密码--请输入6-20位字母数字组合,区分大小写

/**类型判断 */
export default class TypeUtils {
    static isString (o) { //是否是字符串
        return Object.prototype.toString.call(o).slice(8, -1) === 'String'
    }

    static isNumber (o) { //是否是数字
        return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
    }

    static isObj (o) { //是否对象
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
    }

    static isArray (o) { //是否数组
        return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
    }

    static isDate (o) { //是否时间
        return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
    }

    static isBoolean (o) { //是否boolean
        return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
    }

    static isFunction (o) { //是否函数
        return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
    }

    static isNull (o) { //是否为null
        return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
    }

    static isUndefined (o) { //是否undefined
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
    }

    static isFalse (o) {
        if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
        return false
    }

    static isTrue (o) {
        return !this.isFalse(o)
    }

    static getDevice () {//设备类型
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            return "Android";
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            return "iPhone";
        } else if (u.indexOf('iPad') > -1) {//iPad
            return "iPad";
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
            return "Windows Phone";
        } else{
            return "Other"
        }
    }

    static checkStr (str, type) {
        str=str.replace(/\s+/g, "");//去除待验证字符串中的空格
        switch (type) {
            //手机号码
            case 'phone':
                return phoneReg.test(str);
            //座机
            case 'tel':
                return telReg.test(str);
            //身份证
            case 'card':
                return cardReg.test(str);
            //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            case 'pwd':
                return pwdReg.test(str)
            //邮政编码
            case 'postal':
                return postalReg.test(str);
            //QQ号
            case 'QQ':
                return QQReg.test(str);
            //邮箱
            case 'email':
                return emailReg.test(str);
            //金额(小数点2位)
            case 'money':
                return moneyReg.test(str);
            //网址
            case 'URL':
                return URLReg.test(str)
            //IP
            case 'IP':
                return IPReg.test(str);
            //日期时间
            case 'date':
                return dateReg1.test(str) || dateReg2.test(str)
            //数字
            case 'number':
                return numberReg.test(str);
            //英文
            case 'english':
                return englishReg.test(str);
            //中文
            case 'chinese':
                return chineseReg.test(str);
            //小写
            case 'lower':
                return lowerReg.test(str);
            //大写
            case 'upper':
                return upperReg.test(str);
            //HTML标记
            case 'HTML':
                return HTMLReg.test(str);
            //密码--请输入6-20位字母数字组合,区分大小写
            case 'password':
                return passwordReg.test(str);
            default:
                return true;
        }
    }
}
