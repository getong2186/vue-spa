/**
 * Created by yan.zhang@yunshipei.com on 17/12/11.
 * 字符串格式验证
 * validator.notExceedMax('123', 3)  -> true
 * validator.notExceedMax('12 3', 3)  -> false
 * validator.notExceedMax(undefined, 3)  -> false
 * validator.httpFront('https://www.bai')  -> true
 * validator.httpFront('sdfhttps://www.bai')  -> false
 */

import _ from 'lodash';

export default {
    // 是否不为空
    notEmpty (str) {
        if (str !== undefined && str !== null && str !== '' && _.trim(str) !== '') {
            return true;
        } else {
            return false;
        }
    },
    // 字符串是否不超过字符串限制区间
    notExceedMax (str, minNum, maxNum) {
        if (this.notEmpty(str)) {
            if (str.length > maxNum) {
                return false;
            } else {
                return true;
            }
        } else {
            if (minNum === 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    // 字符串是否小于最小数
    notLessMin (str, minNum) {
        if (this.notEmpty(str)) {
            if (str.length < minNum) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    // 字符串是否以http或https开头
    httpFront (str) {
        if (this.notEmpty(str)) {
            var urlText = /^(http|https|rma):\/\/([\w.]+\/?)\S*?$/;
            if (!urlText.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    // 是否是host
    isHost (str) {
        if (this.notEmpty(str)) {
            let hostReg = /^(http|https):\/\/([A-Za-z0-9]+|(\*?))\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
            if (!hostReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    // 是否是host 文件
    isHostFile (str) {
        if (this.notEmpty(str)) {
            let hostFileReg = /^(http(s){0,1}:\/\/)([a-zA-Z0-9]+[a-zA-Z0-9\-]*?(\.|\:))+(([0-9]+|com|cn|net|org|gov|info|la|cc|co))/;
            if (!hostFileReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    // 是否是邮箱格式
    isEmail (str) {
        if (this.notEmpty(str)) {
            var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!emailReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    // 是否是手机格式
    isPhone (str) {
        if (this.notEmpty(str)) {
            var phoneReg = /^1[3|4|5|7|8|9][0-9]{9}$/;
            if (!phoneReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    //  配置管理  兼容配置 弹出窗口 例外网站  *.example.com
    popupWindowException (str) {
        var newPopupArry = str.split('.');
        for (var i = 1; i <= newPopupArry.length - 1; i++) {
            if (newPopupArry[i].indexOf('*') > -1) {
                return false;
            }
        }
        return true;
    },
    // 是否包含中文
    isChinese (str) {
        if (escape(str).indexOf('%u') < 0) {
            return true;
        } else {
            return false;
        }
    },
    // 网页黑白名单包含通配符
    isUrlTest (str) {
        if (this.notEmpty(str)) {
            let urlTestReg = /^(?=^.{3,255}$)[a-zA-Z0-9\*\?][-a-zA-Z0-9\*\?]{0,62}(\.[a-zA-Z0-9\*\?][-a-zA-Z0-9\*\?]{0,62})(:[0-9]{1,4})*/;
            if (!urlTestReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },

    // 密码匹配规则一  ：包含大、小写字母和数字的8-16位字符
    isPassWord (str, min, max) {
        if (this.notEmpty(str)) {
            let mins = min || 8;
            let maxs = max || 16;
            let urlTestReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            if (!urlTestReg.test(str)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}


