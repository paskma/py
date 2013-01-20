// starts hand written code
MALLOC_ZERO_FILLED = 0

try {
    log;
    print = log;
} catch(e) {
}

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

function inherits(child, parent) {
    child.parent = parent;
    for (i in parent.prototype) {
        if (!child.prototype[i]) {
            child.prototype[i] = parent.prototype[i];
        }
    }
}

function isinstanceof(self, what) {
    if (!self) {
        return (false);
    }
    t = self.constructor;
    while ( t ) {
        if (t == what) {
            return (true);
        }
        t = t.parent;
    }
    return (false);
}

/*function delitem(fn, l, i) {
    for(j = i; j < l.length-1; ++j) {
        l[j] = l[j+1];
    }
    l.length--;
}*/

function strcmp(s1, s2) {
    if ( s1 < s2 ) {
        return ( -1 );
    } else if ( s1 == s2 ) {
        return ( 0 );
    }
    return (1);
}

function startswith(s1, s2) {
    if (s1.length < s2.length) {
        return(false);
    }
    for (i = 0; i < s2.length; ++i){
        if (s1.charAt(i) != s2.charAt(i)) {
            return(false);
        }
    }
    return(true);
}

function endswith(s1, s2) {
    if (s2.length > s1.length) {
        return(false);
    }
    for (i = s1.length-s2.length; i < s1.length; ++i) {
        if (s1.charAt(i) != s2.charAt(i - s1.length + s2.length)) {
            return(false);
        }
    }
    return(true);
}

function splitchr(s, ch) {
    var i, lst, next;
    lst = [];
    next = "";
    for (i = 0; i<s.length; ++i) {
        if (s.charAt(i) == ch) {
            lst.length += 1;
            lst[lst.length-1] = next;
            next = "";
        } else {
            next += s.charAt(i);
        }
    }
    lst.length += 1;
    lst[lst.length-1] = next;
    return (lst);
}

function DictIter() {
}

DictIter.prototype.ll_go_next = function () {
    var ret = this.l.length != 0;
    this.current_key = this.l.pop();
    return ret;
}

DictIter.prototype.ll_current_key = function () {
    return this.current_key;
}

function dict_items_iterator(d) {
    var d2 = new DictIter();
    var l = [];
    for (var i in d) {
        l.length += 1;
        l[l.length-1] = i;
    }
    d2.l = l;
    d2.current_key = undefined;
    return d2;
}

function get_dict_len(d) {
    var count;
    count = 0;
    for (var i in d) {
        count += 1;
    }
    return (count);
}

function StringBuilder() {
    this.l = [];
}

StringBuilder.prototype.ll_append_char = function(s) {
    this.l.length += 1;
    this.l[this.l.length - 1] = s;
}

StringBuilder.prototype.ll_append = function(s) {
    this.l.push(s);
}

StringBuilder.prototype.ll_allocate = function(t) {
}

StringBuilder.prototype.ll_build = function() {
    var s;
    s = "";
    for (i in this.l) {
        s += this.l[i];
    }
    return (s);
}

function time() {
    var d;
    d = new Date();
    return d/1000;
}

var main_clock_stuff;

function clock() {
    if (main_clock_stuff) {
        return (new Date() - main_clock_stuff)/1000;
    } else {
        main_clock_stuff = new Date();
        return 0;
    }
}

function substring(s, l, c) {
    return (s.substring(l, l+c));
}

function clear_dict(d) {
    for (var elem in d) {
        delete(d[elem]);
    }
}

function findIndexOf(s1, s2, start, end) {
    if (start > end || start > s1.length) {
        return -1;
    }
    s1 = s1.substr(start, end-start);
    res = s1.indexOf(s2);
    if (res == -1) {
        return -1;
    }
    return res + start;
}

function findIndexOfTrue(s1, s2) {
    return findIndexOf(s1, s2, 0, s1.length) != -1;
}

function countCharOf(s, c, start, end) {
    s = s.substring(start, end);
    var i = 0;
    for (c1 in s) {
        if (s[c1] == c) {
            i++;
        }
    }
    return(i);
}

function countOf(s, s1, start, end) {
    var ret = findIndexOf(s, s1, start, end);
    var i = 0;
    var lgt = 1;
    if (s1.length > 0) {
        lgt = s1.length;
    }
    while (ret != -1) {
        i++;
        ret = findIndexOf(s, s1, ret + lgt, end);
    }
    return (i);
}

function convertToString(stuff) {
    if (stuff === undefined) {
       return ("undefined");
    }
    return (stuff.toString());
}    
// ends hand written code
function ExportedMethods () {
}


function callback_0 (x, cb) {
   var d;
   if (x.readyState == 4) {
      if (x.responseText) {
         eval ( "d = " + x.responseText );
         cb(d);
      } else {
         cb({});
      }
   }
}

ExportedMethods.prototype.show_all_statuses = function ( sessid,callback ) {
    var data,str;
    var x = new XMLHttpRequest();
    data = {'sessid':sessid};
    str = ""
    for(i in data) {
        if (data[i]) {
            if (str.length == 0) {
                str += "?";
            } else {
                str += "&";
            }
            str += escape(i) + "=" + escape(data[i].toString());
        }
    }
    //logDebug('show_all_statuses'+str);
    x.open("GET", 'show_all_statuses' + str, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.onreadystatechange = function () { callback_0(x, callback) };
    //x.setRequestHeader("Connection", "close");
    //x.send(data);
    x.send(null);
}

function callback_1 (x, cb) {
   var d;
   if (x.readyState == 4) {
      if (x.responseText) {
         eval ( "d = " + x.responseText );
         cb(d);
      } else {
         cb({});
      }
   }
}

ExportedMethods.prototype.show_skip = function ( item_name,callback ) {
    var data,str;
    var x = new XMLHttpRequest();
    data = {'item_name':item_name};
    str = ""
    for(i in data) {
        if (data[i]) {
            if (str.length == 0) {
                str += "?";
            } else {
                str += "&";
            }
            str += escape(i) + "=" + escape(data[i].toString());
        }
    }
    //logDebug('show_skip'+str);
    x.open("GET", 'show_skip' + str, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.onreadystatechange = function () { callback_1(x, callback) };
    //x.setRequestHeader("Connection", "close");
    //x.send(data);
    x.send(null);
}

function callback_2 (x, cb) {
   var d;
   if (x.readyState == 4) {
      if (x.responseText) {
         eval ( "d = " + x.responseText );
         cb(d);
      } else {
         cb({});
      }
   }
}

ExportedMethods.prototype.show_sessid = function ( callback ) {
    var data,str;
    var x = new XMLHttpRequest();
    data = {};
    str = ""
    for(i in data) {
        if (data[i]) {
            if (str.length == 0) {
                str += "?";
            } else {
                str += "&";
            }
            str += escape(i) + "=" + escape(data[i].toString());
        }
    }
    //logDebug('show_sessid'+str);
    x.open("GET", 'show_sessid' + str, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.onreadystatechange = function () { callback_2(x, callback) };
    //x.setRequestHeader("Connection", "close");
    //x.send(data);
    x.send(null);
}

function callback_3 (x, cb) {
   var d;
   if (x.readyState == 4) {
      if (x.responseText) {
         eval ( "d = " + x.responseText );
         cb(d);
      } else {
         cb({});
      }
   }
}

ExportedMethods.prototype.show_hosts = function ( callback ) {
    var data,str;
    var x = new XMLHttpRequest();
    data = {};
    str = ""
    for(i in data) {
        if (data[i]) {
            if (str.length == 0) {
                str += "?";
            } else {
                str += "&";
            }
            str += escape(i) + "=" + escape(data[i].toString());
        }
    }
    //logDebug('show_hosts'+str);
    x.open("GET", 'show_hosts' + str, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.onreadystatechange = function () { callback_3(x, callback) };
    //x.setRequestHeader("Connection", "close");
    //x.send(data);
    x.send(null);
}

function callback_4 (x, cb) {
   var d;
   if (x.readyState == 4) {
      if (x.responseText) {
         eval ( "d = " + x.responseText );
         cb(d);
      } else {
         cb({});
      }
   }
}

ExportedMethods.prototype.show_fail = function ( item_name,callback ) {
    var data,str;
    var x = new XMLHttpRequest();
    data = {'item_name':item_name};
    str = ""
    for(i in data) {
        if (data[i]) {
            if (str.length == 0) {
                str += "?";
            } else {
                str += "&";
            }
            str += escape(i) + "=" + escape(data[i].toString());
        }
    }
    //logDebug('show_fail'+str);
    x.open("GET", 'show_fail' + str, true);
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    x.onreadystatechange = function () { callback_4(x, callback) };
    //x.setRequestHeader("Connection", "close");
    //x.send(data);
    x.send(null);
}
function some_strange_function_which_will_never_be_called () {
    var v2,v4,v6,v9;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            main (  );
            v2 = __consts_0.const_str;
            show_skip ( v2 );
            v4 = __consts_0.const_str;
            show_traceback ( v4 );
            v6 = __consts_0.const_str;
            show_info ( v6 );
            hide_info (  );
            v9 = __consts_0.const_str;
            show_host ( v9 );
            hide_host (  );
            hide_messagebox (  );
            opt_scroll (  );
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function show_host (host_name_0) {
    var v70,v71,v72,v73,host_name_1,elem_0,v74,v75,v76,v77,host_name_2,elem_1,tbody_0,v78,v79,last_exc_value_0,host_name_3,elem_2,tbody_1,item_0,v80,v81,v82,v83,v84,v86,v88,host_name_4,elem_3,tbody_2,v90,v92,host_name_5,elem_4,v96,v97,v98;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v70 = __consts_0.Document;
            v71 = v70.getElementById(__consts_0.const_str__2);
            v72 = v71.childNodes;
            v73 = ll_list_is_true__List_ExternalType_Element__ ( v72 );
            host_name_1 = host_name_0;
            elem_0 = v71;
            if (v73 == false)
            {
                block = 1;
                break;
            }
            host_name_5 = host_name_0;
            elem_4 = v71;
            block = 6;
            break;
            case 1:
            v74 = create_elem ( __consts_0.const_str__3 );
            v75 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v76 = ll_dict_getitem__Dict_String__List_String___String ( v75,host_name_1 );
            v77 = ll_listiter__Record_index__Signed__iterable_List_String_ ( v76 );
            host_name_2 = host_name_1;
            elem_1 = elem_0;
            tbody_0 = v74;
            v78 = v77;
            block = 2;
            break;
            case 2:
            try {
                v79 = ll_listnext__Record_index__Signed__iterable_0 ( v78 );
                host_name_3 = host_name_2;
                elem_2 = elem_1;
                tbody_1 = tbody_0;
                item_0 = v79;
                v80 = v78;
                block = 3;
                break;
            }
            catch (exc){
                if (isinstanceof(exc, exceptions_StopIteration))
                {
                    host_name_4 = host_name_2;
                    elem_3 = elem_1;
                    tbody_2 = tbody_0;
                    block = 4;
                    break;
                }
                throw(exc);
            }
            case 3:
            v81 = create_elem ( __consts_0.const_str__5 );
            v82 = create_elem ( __consts_0.const_str__6 );
            v84 = create_text_elem ( item_0 );
            v82.appendChild(v84);
            v81.appendChild(v82);
            tbody_1.appendChild(v81);
            host_name_2 = host_name_3;
            elem_1 = elem_2;
            tbody_0 = tbody_1;
            v78 = v80;
            block = 2;
            break;
            case 4:
            elem_3.appendChild(tbody_2);
            v92 = elem_3.style;
            v92.visibility = __consts_0.const_str__7;
            __consts_0.py____test_rsession_webjs_Globals.ohost = host_name_4;
            setTimeout ( 'reshow_host()',100 );
            block = 5;
            break;
            case 6:
            v97 = elem_4.childNodes;
            v98 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v97,0 );
            elem_4.removeChild(v98);
            host_name_1 = host_name_5;
            elem_0 = elem_4;
            block = 1;
            break;
            case 5:
            return ( undefined );
        }
    }
}

function main () {
    var v16,v17,v18,v19,v21,v22,v23;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            __consts_0.py____test_rsession_webjs_Globals.ofinished = false;
            v16 = __consts_0.ExportedMethods;
            v17 = v16.show_hosts(host_init);
            v18 = __consts_0.ExportedMethods;
            v19 = v18.show_sessid(sessid_comeback);
            __consts_0.Document.onkeypress = key_pressed;
            v21 = __consts_0.Document;
            v22 = v21.getElementById(__consts_0.const_str__9);
            v22.setAttribute(__consts_0.const_str__10,__consts_0.const_str__11);
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function reshow_host () {
    var v170,v171,v172,v173;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v170 = __consts_0.py____test_rsession_webjs_Globals.ohost;
            v171 = ll_streq__String_String ( v170,__consts_0.const_str__12 );
            if (v171 == false)
            {
                block = 1;
                break;
            }
            block = 2;
            break;
            case 1:
            v173 = __consts_0.py____test_rsession_webjs_Globals.ohost;
            show_host ( v173 );
            block = 2;
            break;
            case 2:
            return ( undefined );
        }
    }
}

function ll_dict_getitem__Dict_String__List_String___String (d_0,key_0) {
    var v138,v139,v140,v141,v142,v143,v144,etype_0,evalue_0,key_1,v145,v146,v147;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v140 = (d_0[key_0]!=undefined);
            if (v140 == false)
            {
                block = 1;
                break;
            }
            key_1 = key_0;
            v145 = d_0;
            block = 3;
            break;
            case 1:
            v142 = __consts_0.exceptions_KeyError;
            v143 = v142.meta;
            etype_0 = v143;
            evalue_0 = v142;
            block = 2;
            break;
            case 3:
            v147 = v145[key_1];
            v138 = v147;
            block = 4;
            break;
            case 2:
            throw(evalue_0);
            case 4:
            return ( v138 );
        }
    }
}

function exceptions_Exception () {
}

exceptions_Exception.prototype.toString = function (){
    return ( '<exceptions.Exception object>' );
}

inherits(exceptions_Exception,Object);
function ll_listnext__Record_index__Signed__iterable_0 (iter_0) {
    var v152,v153,v154,v155,v156,v157,v158,iter_1,l_1,index_0,v159,v161,v162,v163,v164,v165,etype_1,evalue_1;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v153 = iter_0.iterable;
            v154 = iter_0.index;
            v156 = v153.length;
            v157 = (v154>=v156);
            iter_1 = iter_0;
            l_1 = v153;
            index_0 = v154;
            if (v157 == false)
            {
                block = 1;
                break;
            }
            block = 3;
            break;
            case 1:
            v159 = (index_0+1);
            iter_1.index = v159;
            v162 = l_1[index_0];
            v152 = v162;
            block = 2;
            break;
            case 3:
            v163 = __consts_0.exceptions_StopIteration;
            v164 = v163.meta;
            etype_1 = v164;
            evalue_1 = v163;
            block = 4;
            break;
            case 4:
            throw(evalue_1);
            case 2:
            return ( v152 );
        }
    }
}

function create_text_elem (txt_0) {
    var v166,v167,v168;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v167 = __consts_0.Document;
            v168 = v167.createTextNode(txt_0);
            v166 = v168;
            block = 1;
            break;
            case 1:
            return ( v166 );
        }
    }
}

function show_traceback (item_name_1) {
    var v29,v30,v31,v32,v33,v35,v38,v41,v44;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v29 = ll_dict_getitem__Dict_String__Record_item2__Str_String ( __consts_0.const_tuple,item_name_1 );
            v30 = v29.item0;
            v31 = v29.item1;
            v32 = v29.item2;
            v33 = new StringBuilder();
            v33.ll_append(__consts_0.const_str__16);
            v35 = ll_str__StringR_StringConst_String ( v30 );
            v33.ll_append(v35);
            v33.ll_append(__consts_0.const_str__17);
            v38 = ll_str__StringR_StringConst_String ( v31 );
            v33.ll_append(v38);
            v33.ll_append(__consts_0.const_str__18);
            v41 = ll_str__StringR_StringConst_String ( v32 );
            v33.ll_append(v41);
            v33.ll_append(__consts_0.const_str__19);
            v44 = v33.ll_build();
            set_msgbox ( item_name_1,v44 );
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed (l_2,index_1) {
    var v175,v176,l_3,index_2,v178,v179,v180,index_3,v182,v183,v184;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v176 = (index_1>=0);
            l_3 = l_2;
            index_2 = index_1;
            block = 1;
            break;
            case 1:
            v179 = l_3.length;
            v180 = (index_2<v179);
            index_3 = index_2;
            v182 = l_3;
            block = 2;
            break;
            case 2:
            v184 = v182[index_3];
            v175 = v184;
            block = 3;
            break;
            case 3:
            return ( v175 );
        }
    }
}

function hide_messagebox () {
    var v115,v116,mbox_0,v117,v118,mbox_1,v119,v120,v121;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v115 = __consts_0.Document;
            v116 = v115.getElementById(__consts_0.const_str__20);
            mbox_0 = v116;
            block = 1;
            break;
            case 1:
            v117 = mbox_0.childNodes;
            v118 = ll_list_is_true__List_ExternalType_Element__ ( v117 );
            if (v118 == false)
            {
                block = 2;
                break;
            }
            mbox_1 = mbox_0;
            block = 3;
            break;
            case 3:
            v120 = mbox_1.childNodes;
            v121 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v120,0 );
            mbox_1.removeChild(v121);
            mbox_0 = mbox_1;
            block = 1;
            break;
            case 2:
            return ( undefined );
        }
    }
}

function ll_streq__String_String (s1_0,s2_0) {
    var v253,v254,v255,v256,s2_1,v257,v258,v259,v260,v261,v262;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v254 = !!s1_0;
            v255 = !v254;
            s2_1 = s2_0;
            v257 = s1_0;
            if (v255 == false)
            {
                block = 1;
                break;
            }
            v260 = s2_0;
            block = 3;
            break;
            case 1:
            v259 = (v257==s2_1);
            v253 = v259;
            block = 2;
            break;
            case 3:
            v261 = !!v260;
            v262 = !v261;
            v253 = v262;
            block = 2;
            break;
            case 2:
            return ( v253 );
        }
    }
}

function ll_dict_getitem__Dict_String__Record_item2__Str_String (d_1,key_4) {
    var v263,v264,v265,v266,v267,v268,v269,etype_2,evalue_2,key_5,v270,v271,v272;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v265 = (d_1[key_4]!=undefined);
            if (v265 == false)
            {
                block = 1;
                break;
            }
            key_5 = key_4;
            v270 = d_1;
            block = 3;
            break;
            case 1:
            v267 = __consts_0.exceptions_KeyError;
            v268 = v267.meta;
            etype_2 = v268;
            evalue_2 = v267;
            block = 2;
            break;
            case 3:
            v272 = v270[key_5];
            v263 = v272;
            block = 4;
            break;
            case 2:
            throw(evalue_2);
            case 4:
            return ( v263 );
        }
    }
}

function sessid_comeback (id_0) {
    var v235,v236;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            __consts_0.py____test_rsession_webjs_Globals.osessid = id_0;
            v235 = __consts_0.ExportedMethods;
            v236 = v235.show_all_statuses(id_0,comeback);
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function key_pressed (key_3) {
    var v238,v239,v240,v241,v242,v243,v244,v245,v246,v249,v250;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v238 = key_3.charCode;
            v239 = (v238==115);
            if (v239 == false)
            {
                block = 1;
                break;
            }
            block = 2;
            break;
            case 2:
            v241 = __consts_0.Document;
            v242 = v241.getElementById(__consts_0.const_str__9);
            v243 = __consts_0.py____test_rsession_webjs_Options.oscroll;
            v245 = v242;
            if (v243 == false)
            {
                block = 3;
                break;
            }
            v249 = v242;
            block = 4;
            break;
            case 3:
            v245.setAttribute(__consts_0.const_str__10,__consts_0.const_str__22);
            __consts_0.py____test_rsession_webjs_Options.oscroll = true;
            block = 1;
            break;
            case 4:
            v249.removeAttribute(__consts_0.const_str__10);
            __consts_0.py____test_rsession_webjs_Options.oscroll = false;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function opt_scroll () {
    var v124,v125;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v124 = __consts_0.py____test_rsession_webjs_Options.oscroll;
            if (v124 == false)
            {
                block = 1;
                break;
            }
            block = 3;
            break;
            case 1:
            __consts_0.py____test_rsession_webjs_Options.oscroll = true;
            block = 2;
            break;
            case 3:
            __consts_0.py____test_rsession_webjs_Options.oscroll = false;
            block = 2;
            break;
            case 2:
            return ( undefined );
        }
    }
}

function ll_list_is_true__List_ExternalType_Element__ (l_0) {
    var v128,v129,v130,v131,v132,v133,v134;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v129 = !!l_0;
            v128 = v129;
            if (v129 == false)
            {
                block = 1;
                break;
            }
            v131 = l_0;
            block = 2;
            break;
            case 2:
            v133 = v131.length;
            v134 = (v133!=0);
            v128 = v134;
            block = 1;
            break;
            case 1:
            return ( v128 );
        }
    }
}

function exceptions_StopIteration () {
}

exceptions_StopIteration.prototype.toString = function (){
    return ( '<exceptions.StopIteration object>' );
}

inherits(exceptions_StopIteration,exceptions_Exception);
function create_elem (s_0) {
    var v135,v136,v137;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v136 = __consts_0.Document;
            v137 = v136.createElement(s_0);
            v135 = v137;
            block = 1;
            break;
            case 1:
            return ( v135 );
        }
    }
}

function show_skip (item_name_0) {
    var v26;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v26 = ll_dict_getitem__Dict_String__String__String ( __consts_0.const_tuple__23,item_name_0 );
            set_msgbox ( item_name_0,v26 );
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function host_init (host_dict_0) {
    var v186,v187,v188,v189,v190,host_dict_1,tbody_3,v191,v192,last_exc_value_1,host_dict_2,tbody_4,host_0,v193,v194,v195,v197,v198,v200,v201,v202,v205,v207,v208,v210,v213,v215,host_dict_3,v221,v223,v224,v225,v226,v227,last_exc_value_2,key_2,v228,v229,v231;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v186 = __consts_0.Document;
            v187 = v186.getElementById(__consts_0.const_str__24);
            v189 = ll_dict_kvi__Dict_String__String__List_String_LlT_dum_keysConst ( host_dict_0 );
            v190 = ll_listiter__Record_index__Signed__iterable_List_String_ ( v189 );
            host_dict_1 = host_dict_0;
            tbody_3 = v187;
            v191 = v190;
            block = 1;
            break;
            case 1:
            try {
                v192 = ll_listnext__Record_index__Signed__iterable_0 ( v191 );
                host_dict_2 = host_dict_1;
                tbody_4 = tbody_3;
                host_0 = v192;
                v193 = v191;
                block = 2;
                break;
            }
            catch (exc){
                if (isinstanceof(exc, exceptions_StopIteration))
                {
                    host_dict_3 = host_dict_1;
                    block = 3;
                    break;
                }
                throw(exc);
            }
            case 2:
            v194 = create_elem ( __consts_0.const_str__5 );
            tbody_4.appendChild(v194);
            v197 = create_elem ( __consts_0.const_str__6 );
            v198 = v197.style;
            v198.background = __consts_0.const_str__25;
            v200 = ll_dict_getitem__Dict_String__String__String ( host_dict_2,host_0 );
            v201 = create_text_elem ( v200 );
            v197.appendChild(v201);
            v197.id = host_0;
            v194.appendChild(v197);
            v208 = new StringBuilder();
            v208.ll_append(__consts_0.const_str__26);
            v210 = ll_str__StringR_StringConst_String ( host_0 );
            v208.ll_append(v210);
            v208.ll_append(__consts_0.const_str__27);
            v213 = v208.ll_build();
            v197.setAttribute(__consts_0.const_str__28,v213);
            v197.setAttribute(__consts_0.const_str__29,__consts_0.const_str__30);
            __consts_0.py____test_rsession_webjs_Globals.orsync_dots = 0;
            __consts_0.py____test_rsession_webjs_Globals.orsync_done = false;
            setTimeout ( 'update_rsync()',1000 );
            host_dict_1 = host_dict_2;
            tbody_3 = tbody_4;
            v191 = v193;
            block = 1;
            break;
            case 3:
            __consts_0.py____test_rsession_webjs_Globals.ohost_dict = host_dict_3;
            v221 = ll_newdict__Dict_String__List_String__LlT (  );
            __consts_0.py____test_rsession_webjs_Globals.ohost_pending = v221;
            v224 = ll_dict_kvi__Dict_String__String__List_String_LlT_dum_keysConst ( host_dict_3 );
            v225 = ll_listiter__Record_index__Signed__iterable_List_String_ ( v224 );
            v226 = v225;
            block = 4;
            break;
            case 4:
            try {
                v227 = ll_listnext__Record_index__Signed__iterable_0 ( v226 );
                key_2 = v227;
                v228 = v226;
                block = 5;
                break;
            }
            catch (exc){
                if (isinstanceof(exc, exceptions_StopIteration))
                {
                    block = 6;
                    break;
                }
                throw(exc);
            }
            case 5:
            v229 = new Array();
            v229.length = 0;
            v231 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v231[key_2]=v229;
            v226 = v228;
            block = 4;
            break;
            case 6:
            return ( undefined );
        }
    }
}

function ll_dict_kvi__Dict_String__String__List_String_LlT_dum_keysConst (d_3) {
    var v332,v333,v334,v335,v336,v337,length_0,result_0,it_0,i_0,v338,v339,v340,result_1,v341,v342,v343,v344,v345,v346,v347,etype_4,evalue_4,length_1,result_2,it_1,i_1,v348,v349,v350,length_2,result_3,it_2,v352,v353;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v334 = get_dict_len ( d_3 );
            v335 = ll_newlist__List_String_LlT_Signed ( v334 );
            v337 = dict_items_iterator ( d_3 );
            length_0 = v334;
            result_0 = v335;
            it_0 = v337;
            i_0 = 0;
            block = 1;
            break;
            case 1:
            v339 = it_0.ll_go_next();
            result_1 = result_0;
            v341 = i_0;
            v342 = length_0;
            if (v339 == false)
            {
                block = 2;
                break;
            }
            length_1 = length_0;
            result_2 = result_0;
            it_1 = it_0;
            i_1 = i_0;
            block = 6;
            break;
            case 2:
            v343 = (v341==v342);
            if (v343 == false)
            {
                block = 3;
                break;
            }
            v332 = result_1;
            block = 5;
            break;
            case 3:
            v345 = __consts_0.py____magic_assertion_AssertionError;
            v346 = v345.meta;
            etype_4 = v346;
            evalue_4 = v345;
            block = 4;
            break;
            case 6:
            v350 = it_1.ll_current_key();
            result_2[i_1]=v350;
            length_2 = length_1;
            result_3 = result_2;
            it_2 = it_1;
            v352 = i_1;
            block = 7;
            break;
            case 7:
            v353 = (v352+1);
            length_0 = length_2;
            result_0 = result_3;
            it_0 = it_2;
            i_0 = v353;
            block = 1;
            break;
            case 4:
            throw(evalue_4);
            case 5:
            return ( v332 );
        }
    }
}

function hide_host () {
    var v101,v102,elem_5,v103,v104,v105,v106,v107,elem_6,v110,v111,v112;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v101 = __consts_0.Document;
            v102 = v101.getElementById(__consts_0.const_str__2);
            elem_5 = v102;
            block = 1;
            break;
            case 1:
            v103 = elem_5.childNodes;
            v104 = ll_len__List_ExternalType_Element__ ( v103 );
            v105 = !!v104;
            v106 = elem_5;
            if (v105 == false)
            {
                block = 2;
                break;
            }
            elem_6 = elem_5;
            block = 4;
            break;
            case 2:
            v107 = v106.style;
            v107.visibility = __consts_0.const_str__32;
            __consts_0.py____test_rsession_webjs_Globals.ohost = __consts_0.const_str__12;
            block = 3;
            break;
            case 4:
            v111 = elem_6.childNodes;
            v112 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v111,0 );
            elem_6.removeChild(v112);
            elem_5 = elem_6;
            block = 1;
            break;
            case 3:
            return ( undefined );
        }
    }
}

function py____test_rsession_webjs_Globals () {
    this.odata_empty = false;
    this.osessid = __consts_0.const_str__12;
    this.ohost = __consts_0.const_str__12;
    this.orsync_dots = 0;
    this.ofinished = false;
    this.ohost_dict = __consts_0.const_tuple__33;
    this.opending = __consts_0.const_list;
    this.orsync_done = false;
    this.ohost_pending = __consts_0.const_tuple__35;
}

py____test_rsession_webjs_Globals.prototype.toString = function (){
    return ( '<py.__.test.rsession.webjs.Globals object>' );
}

inherits(py____test_rsession_webjs_Globals,Object);
function ll_listiter__Record_index__Signed__iterable_List_String_ (lst_0) {
    var v148,v149;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v149 = new Object();
            v149.iterable = lst_0;
            v149.index = 0;
            v148 = v149;
            block = 1;
            break;
            case 1:
            return ( v148 );
        }
    }
}

function py____test_rsession_webjs_Options () {
    this.oscroll = false;
}

py____test_rsession_webjs_Options.prototype.toString = function (){
    return ( '<py.__.test.rsession.webjs.Options object>' );
}

inherits(py____test_rsession_webjs_Options,Object);
function exceptions_StandardError () {
}

exceptions_StandardError.prototype.toString = function (){
    return ( '<exceptions.StandardError object>' );
}

inherits(exceptions_StandardError,exceptions_Exception);
function exceptions_LookupError () {
}

exceptions_LookupError.prototype.toString = function (){
    return ( '<exceptions.LookupError object>' );
}

inherits(exceptions_LookupError,exceptions_StandardError);
function exceptions_KeyError () {
}

exceptions_KeyError.prototype.toString = function (){
    return ( '<exceptions.KeyError object>' );
}

inherits(exceptions_KeyError,exceptions_LookupError);
function hide_info () {
    var v65,v66,v67;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v65 = __consts_0.Document;
            v66 = v65.getElementById(__consts_0.const_str__36);
            v67 = v66.style;
            v67.visibility = __consts_0.const_str__32;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_newlist__List_String_LlT_Signed (length_3) {
    var v390,v391,v392;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v391 = new Array();
            v391.length = length_3;
            v390 = v391;
            block = 1;
            break;
            case 1:
            return ( v390 );
        }
    }
}

function ll_newdict__Dict_String__List_String__LlT () {
    var v388,v389;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v389 = new Object();
            v388 = v389;
            block = 1;
            break;
            case 1:
            return ( v388 );
        }
    }
}

function show_info (data_0) {
    var v47,v48,v49,data_1,info_0,v51,v52,v53,info_1,v54,v55,v56,v58,data_2,info_2,v60,v61,v62;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v47 = __consts_0.Document;
            v48 = v47.getElementById(__consts_0.const_str__36);
            v49 = v48.style;
            v49.visibility = __consts_0.const_str__7;
            data_1 = data_0;
            info_0 = v48;
            block = 1;
            break;
            case 1:
            v51 = info_0.childNodes;
            v52 = ll_len__List_ExternalType_Element__ ( v51 );
            v53 = !!v52;
            info_1 = info_0;
            v54 = data_1;
            if (v53 == false)
            {
                block = 2;
                break;
            }
            data_2 = data_1;
            info_2 = info_0;
            block = 4;
            break;
            case 2:
            v55 = create_text_elem ( v54 );
            info_1.appendChild(v55);
            v58 = info_1.style;
            v58.backgroundColor = __consts_0.const_str__37;
            block = 3;
            break;
            case 4:
            v61 = info_2.childNodes;
            v62 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v61,0 );
            info_2.removeChild(v62);
            data_1 = data_2;
            info_0 = info_2;
            block = 1;
            break;
            case 3:
            return ( undefined );
        }
    }
}

function ll_str__StringR_StringConst_String (s_1) {
    var v273;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v273 = s_1;
            block = 1;
            break;
            case 1:
            return ( v273 );
        }
    }
}

function set_msgbox (item_name_2,data_3) {
    var v275,item_name_3,data_4,msgbox_0,v276,v277,v278,item_name_4,data_5,msgbox_1,v279,v280,v281,v282,v283,v285,v287,v288,item_name_5,data_6,msgbox_2,v291,v292,v293;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v275 = get_elem ( __consts_0.const_str__20 );
            item_name_3 = item_name_2;
            data_4 = data_3;
            msgbox_0 = v275;
            block = 1;
            break;
            case 1:
            v276 = msgbox_0.childNodes;
            v277 = ll_len__List_ExternalType_Element__ ( v276 );
            v278 = !!v277;
            item_name_4 = item_name_3;
            data_5 = data_4;
            msgbox_1 = msgbox_0;
            if (v278 == false)
            {
                block = 2;
                break;
            }
            item_name_5 = item_name_3;
            data_6 = data_4;
            msgbox_2 = msgbox_0;
            block = 4;
            break;
            case 2:
            v279 = create_elem ( __consts_0.const_str__38 );
            v280 = ll_strconcat__String_String ( item_name_4,__consts_0.const_str__19 );
            v281 = ll_strconcat__String_String ( v280,data_5 );
            v282 = create_text_elem ( v281 );
            v279.appendChild(v282);
            msgbox_1.appendChild(v279);
            v287 = __consts_0.Window.location;
            v287.assign(__consts_0.const_str__40);
            __consts_0.py____test_rsession_webjs_Globals.odata_empty = false;
            block = 3;
            break;
            case 4:
            v292 = msgbox_2.childNodes;
            v293 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v292,0 );
            msgbox_2.removeChild(v293);
            item_name_3 = item_name_5;
            data_4 = data_6;
            msgbox_0 = msgbox_2;
            block = 1;
            break;
            case 3:
            return ( undefined );
        }
    }
}

function ll_len__List_ExternalType_Element__ (l_4) {
    var v394,v395,v396;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v396 = l_4.length;
            v394 = v396;
            block = 1;
            break;
            case 1:
            return ( v394 );
        }
    }
}

function comeback (msglist_0) {
    var v296,v297,v298,msglist_1,v299,v300,v301,v302,msglist_2,v303,v304,last_exc_value_3,msglist_3,v305,v306,v307,v308,msglist_4,v309,v312,v313,v314,last_exc_value_4,v315,v316,v317,v318,v319,v320,v321;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v296 = ll_len__List_Dict_String__String__ ( msglist_0 );
            v297 = (v296==0);
            msglist_1 = msglist_0;
            if (v297 == false)
            {
                block = 1;
                break;
            }
            block = 4;
            break;
            case 1:
            v299 = __consts_0.py____test_rsession_webjs_Globals.opending;
            v300 = 0;
            v301 = ll_listslice_startonly__List_Dict_String__String__LlT_List_Dict_String__String___Signed ( v299,v300 );
            v302 = ll_listiter__Record_index__Signed__iterable_List_Dict_String__String__ ( v301 );
            msglist_2 = msglist_1;
            v303 = v302;
            block = 2;
            break;
            case 2:
            try {
                v304 = ll_listnext__Record_index__Signed__iterable ( v303 );
                msglist_3 = msglist_2;
                v305 = v303;
                v306 = v304;
                block = 3;
                break;
            }
            catch (exc){
                if (isinstanceof(exc, exceptions_StopIteration))
                {
                    msglist_4 = msglist_2;
                    block = 5;
                    break;
                }
                throw(exc);
            }
            case 3:
            v307 = process ( v306 );
            if (v307 == false)
            {
                block = 4;
                break;
            }
            msglist_2 = msglist_3;
            v303 = v305;
            block = 2;
            break;
            case 5:
            v309 = new Array();
            v309.length = 0;
            __consts_0.py____test_rsession_webjs_Globals.opending = v309;
            v312 = ll_listiter__Record_index__Signed__iterable_List_Dict_String__String__ ( msglist_4 );
            v313 = v312;
            block = 6;
            break;
            case 6:
            try {
                v314 = ll_listnext__Record_index__Signed__iterable ( v313 );
                v315 = v313;
                v316 = v314;
                block = 7;
                break;
            }
            catch (exc){
                if (isinstanceof(exc, exceptions_StopIteration))
                {
                    block = 8;
                    break;
                }
                throw(exc);
            }
            case 7:
            v317 = process ( v316 );
            if (v317 == false)
            {
                block = 4;
                break;
            }
            v313 = v315;
            block = 6;
            break;
            case 8:
            v319 = __consts_0.ExportedMethods;
            v320 = __consts_0.py____test_rsession_webjs_Globals.osessid;
            v321 = v319.show_all_statuses(v320,comeback);
            block = 4;
            break;
            case 4:
            return ( undefined );
        }
    }
}

function exceptions_AssertionError () {
}

exceptions_AssertionError.prototype.toString = function (){
    return ( '<exceptions.AssertionError object>' );
}

inherits(exceptions_AssertionError,exceptions_StandardError);
function py____magic_assertion_AssertionError () {
}

py____magic_assertion_AssertionError.prototype.toString = function (){
    return ( '<py.__.magic.assertion.AssertionError object>' );
}

inherits(py____magic_assertion_AssertionError,exceptions_AssertionError);
function ll_strconcat__String_String (obj_0,arg0_0) {
    var v400,v401,v402;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v402 = (obj_0+arg0_0);
            v400 = v402;
            block = 1;
            break;
            case 1:
            return ( v400 );
        }
    }
}

function ll_dict_getitem__Dict_String__String__String (d_2,key_6) {
    var v322,v323,v324,v325,v326,v327,v328,etype_3,evalue_3,key_7,v329,v330,v331;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v324 = (d_2[key_6]!=undefined);
            if (v324 == false)
            {
                block = 1;
                break;
            }
            key_7 = key_6;
            v329 = d_2;
            block = 3;
            break;
            case 1:
            v326 = __consts_0.exceptions_KeyError;
            v327 = v326.meta;
            etype_3 = v327;
            evalue_3 = v326;
            block = 2;
            break;
            case 3:
            v331 = v329[key_7];
            v322 = v331;
            block = 4;
            break;
            case 2:
            throw(evalue_3);
            case 4:
            return ( v322 );
        }
    }
}

function update_rsync () {
    var v355,v356,v357,v358,v359,v360,v361,v362,elem_7,v363,v364,v365,v366,v367,v369,v370,v371,elem_8,v372,v373,v375,v378,v379,v380,elem_9,text_0,v384,v385,v386;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v355 = __consts_0.py____test_rsession_webjs_Globals.ofinished;
            if (v355 == false)
            {
                block = 1;
                break;
            }
            block = 4;
            break;
            case 1:
            v357 = __consts_0.Document;
            v358 = v357.getElementById(__consts_0.const_str__41);
            v359 = __consts_0.py____test_rsession_webjs_Globals.orsync_done;
            v361 = (v359==1);
            elem_7 = v358;
            if (v361 == false)
            {
                block = 2;
                break;
            }
            v384 = v358;
            block = 6;
            break;
            case 2:
            v363 = __consts_0.py____test_rsession_webjs_Globals.orsync_dots;
            v364 = ll_char_mul__Char_Signed ( '.',v363 );
            v365 = ll_strconcat__String_String ( __consts_0.const_str__42,v364 );
            v366 = __consts_0.py____test_rsession_webjs_Globals.orsync_dots;
            v367 = (v366+1);
            __consts_0.py____test_rsession_webjs_Globals.orsync_dots = v367;
            v369 = __consts_0.py____test_rsession_webjs_Globals.orsync_dots;
            v370 = (v369>5);
            elem_8 = elem_7;
            v372 = v365;
            if (v370 == false)
            {
                block = 3;
                break;
            }
            elem_9 = elem_7;
            text_0 = v365;
            block = 5;
            break;
            case 3:
            v373 = new StringBuilder();
            v373.ll_append(__consts_0.const_str__43);
            v375 = ll_str__StringR_StringConst_String ( v372 );
            v373.ll_append(v375);
            v373.ll_append(__consts_0.const_str__44);
            v378 = v373.ll_build();
            v379 = elem_8.childNodes;
            v380 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v379,0 );
            v380.nodeValue = v378;
            setTimeout ( 'update_rsync()',1000 );
            block = 4;
            break;
            case 5:
            __consts_0.py____test_rsession_webjs_Globals.orsync_dots = 0;
            elem_8 = elem_9;
            v372 = text_0;
            block = 3;
            break;
            case 6:
            v385 = v384.childNodes;
            v386 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v385,0 );
            v386.nodeValue = __consts_0.const_str__41;
            block = 4;
            break;
            case 4:
            return ( undefined );
        }
    }
}

function ll_len__List_Dict_String__String__ (l_5) {
    var v403,v404,v405;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v405 = l_5.length;
            v403 = v405;
            block = 1;
            break;
            case 1:
            return ( v403 );
        }
    }
}

function ll_listnext__Record_index__Signed__iterable (iter_2) {
    var v428,v429,v430,v431,v432,v433,v434,iter_3,l_8,index_4,v435,v437,v438,v439,v440,v441,etype_5,evalue_5;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v429 = iter_2.iterable;
            v430 = iter_2.index;
            v432 = v429.length;
            v433 = (v430>=v432);
            iter_3 = iter_2;
            l_8 = v429;
            index_4 = v430;
            if (v433 == false)
            {
                block = 1;
                break;
            }
            block = 3;
            break;
            case 1:
            v435 = (index_4+1);
            iter_3.index = v435;
            v438 = l_8[index_4];
            v428 = v438;
            block = 2;
            break;
            case 3:
            v439 = __consts_0.exceptions_StopIteration;
            v440 = v439.meta;
            etype_5 = v440;
            evalue_5 = v439;
            block = 4;
            break;
            case 4:
            throw(evalue_5);
            case 2:
            return ( v428 );
        }
    }
}

function ll_listslice_startonly__List_Dict_String__String__LlT_List_Dict_String__String___Signed (l1_0,start_0) {
    var v406,v407,v408,v409,v411,v413,v415,l1_1,len1_0,l_6,j_0,i_2,v416,v417,l1_2,len1_1,l_7,j_1,i_3,v418,v419,v420,v422,v423;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v408 = l1_0.length;
            v409 = (start_0>=0);
            v411 = (start_0<=v408);
            v413 = (v408-start_0);
            undefined;
            v415 = ll_newlist__List_Dict_String__String__LlT_Signed ( v413 );
            l1_1 = l1_0;
            len1_0 = v408;
            l_6 = v415;
            j_0 = 0;
            i_2 = start_0;
            block = 1;
            break;
            case 1:
            v416 = (i_2<len1_0);
            v406 = l_6;
            if (v416 == false)
            {
                block = 2;
                break;
            }
            l1_2 = l1_1;
            len1_1 = len1_0;
            l_7 = l_6;
            j_1 = j_0;
            i_3 = i_2;
            block = 3;
            break;
            case 3:
            v420 = l1_2[i_3];
            l_7[j_1]=v420;
            v422 = (i_3+1);
            v423 = (j_1+1);
            l1_1 = l1_2;
            len1_0 = len1_1;
            l_6 = l_7;
            j_0 = v423;
            i_2 = v422;
            block = 1;
            break;
            case 2:
            return ( v406 );
        }
    }
}

function get_elem (el_0) {
    var v397,v398,v399;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v398 = __consts_0.Document;
            v399 = v398.getElementById(el_0);
            v397 = v399;
            block = 1;
            break;
            case 1:
            return ( v397 );
        }
    }
}

function process (msg_0) {
    var v442,v443,v444,v445,msg_1,v446,v447,v448,v449,v450,v451,v452,msg_2,v453,v454,v455,msg_3,v456,v457,v458,msg_4,v459,v460,v461,msg_5,v462,v463,v464,msg_6,v465,v466,v467,msg_7,v468,v469,v470,msg_8,v471,v472,v473,msg_9,v474,v475,v476,v477,v478,v479,v480,v481,v482,v483,v484,msg_10,v489,v490,v491,msg_11,v492,v493,msg_12,module_part_0,v495,v496,v497,v498,v500,v501,v503,v506,v507,v508,v510,v512,msg_13,v514,v515,v516,msg_14,v517,v518,msg_15,module_part_1,v520,v521,v522,v523,v524,v525,v527,v528,v530,v533,v535,v536,v538,v540,v542,v544,v545,v546,msg_16,v547,v548,v549,v550,v554,v555,v556,v557,v559,v562,v565,v568,v570,v572,v574,v576,v578,v581,v582,v583,v584,v585,msg_17,v587,v588,v589,msg_18,v590,v591,v593,v594,msg_19,v596,v597,v598,v599,v601,v602,v603,v604,v606,v607,v608,v611,v612,v613,msg_20,v615,v616,v617,v618,v619,v620,v621,v622,v624,v625,v626,v627,v628,v629,v630,v631,v634,v635,v636,v637,v640,v643,v644,v645,main_t_0,v647,v648,v649;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v443 = get_dict_len ( msg_0 );
            v444 = (v443==0);
            msg_1 = msg_0;
            if (v444 == false)
            {
                block = 1;
                break;
            }
            v442 = false;
            block = 12;
            break;
            case 1:
            v446 = __consts_0.Document;
            v447 = v446.getElementById(__consts_0.const_str__45);
            v448 = __consts_0.Document;
            v449 = v448.getElementById(__consts_0.const_str__46);
            v450 = ll_dict_getitem__Dict_String__String__String ( msg_1,__consts_0.const_str__47 );
            v451 = ll_streq__String_String ( v450,__consts_0.const_str__48 );
            msg_2 = msg_1;
            if (v451 == false)
            {
                block = 2;
                break;
            }
            main_t_0 = v449;
            v647 = msg_1;
            block = 29;
            break;
            case 2:
            v453 = ll_dict_getitem__Dict_String__String__String ( msg_2,__consts_0.const_str__47 );
            v454 = ll_streq__String_String ( v453,__consts_0.const_str__49 );
            msg_3 = msg_2;
            if (v454 == false)
            {
                block = 3;
                break;
            }
            msg_20 = msg_2;
            block = 28;
            break;
            case 3:
            v456 = ll_dict_getitem__Dict_String__String__String ( msg_3,__consts_0.const_str__47 );
            v457 = ll_streq__String_String ( v456,__consts_0.const_str__50 );
            msg_4 = msg_3;
            if (v457 == false)
            {
                block = 4;
                break;
            }
            msg_19 = msg_3;
            block = 27;
            break;
            case 4:
            v459 = ll_dict_getitem__Dict_String__String__String ( msg_4,__consts_0.const_str__47 );
            v460 = ll_streq__String_String ( v459,__consts_0.const_str__51 );
            msg_5 = msg_4;
            if (v460 == false)
            {
                block = 5;
                break;
            }
            msg_17 = msg_4;
            block = 24;
            break;
            case 5:
            v462 = ll_dict_getitem__Dict_String__String__String ( msg_5,__consts_0.const_str__47 );
            v463 = ll_streq__String_String ( v462,__consts_0.const_str__52 );
            msg_6 = msg_5;
            if (v463 == false)
            {
                block = 6;
                break;
            }
            msg_16 = msg_5;
            block = 23;
            break;
            case 6:
            v465 = ll_dict_getitem__Dict_String__String__String ( msg_6,__consts_0.const_str__47 );
            v466 = ll_streq__String_String ( v465,__consts_0.const_str__53 );
            msg_7 = msg_6;
            if (v466 == false)
            {
                block = 7;
                break;
            }
            msg_13 = msg_6;
            block = 20;
            break;
            case 7:
            v468 = ll_dict_getitem__Dict_String__String__String ( msg_7,__consts_0.const_str__47 );
            v469 = ll_streq__String_String ( v468,__consts_0.const_str__54 );
            msg_8 = msg_7;
            if (v469 == false)
            {
                block = 8;
                break;
            }
            msg_10 = msg_7;
            block = 17;
            break;
            case 8:
            v471 = ll_dict_getitem__Dict_String__String__String ( msg_8,__consts_0.const_str__47 );
            v472 = ll_streq__String_String ( v471,__consts_0.const_str__55 );
            msg_9 = msg_8;
            if (v472 == false)
            {
                block = 9;
                break;
            }
            block = 16;
            break;
            case 9:
            v474 = ll_dict_getitem__Dict_String__String__String ( msg_9,__consts_0.const_str__47 );
            v475 = ll_streq__String_String ( v474,__consts_0.const_str__56 );
            v477 = msg_9;
            if (v475 == false)
            {
                block = 10;
                break;
            }
            block = 15;
            break;
            case 10:
            v478 = ll_dict_getitem__Dict_String__String__String ( v477,__consts_0.const_str__47 );
            v479 = ll_streq__String_String ( v478,__consts_0.const_str__57 );
            if (v479 == false)
            {
                block = 11;
                break;
            }
            block = 14;
            break;
            case 11:
            v481 = __consts_0.py____test_rsession_webjs_Globals.odata_empty;
            v442 = true;
            if (v481 == false)
            {
                block = 12;
                break;
            }
            block = 13;
            break;
            case 13:
            v483 = __consts_0.Document;
            v484 = v483.getElementById(__consts_0.const_str__20);
            scroll_down_if_needed ( v484 );
            v442 = true;
            block = 12;
            break;
            case 14:
            show_crash (  );
            block = 11;
            break;
            case 15:
            show_interrupt (  );
            block = 11;
            break;
            case 16:
            __consts_0.py____test_rsession_webjs_Globals.orsync_done = true;
            block = 11;
            break;
            case 17:
            v489 = ll_dict_getitem__Dict_String__String__String ( msg_10,__consts_0.const_str__58 );
            v490 = get_elem ( v489 );
            v491 = !!v490;
            msg_11 = msg_10;
            if (v491 == false)
            {
                block = 18;
                break;
            }
            msg_12 = msg_10;
            module_part_0 = v490;
            block = 19;
            break;
            case 18:
            v492 = __consts_0.py____test_rsession_webjs_Globals.opending;
            ll_append__List_Dict_String__String___Dict_String__String_ ( v492,msg_11 );
            v442 = true;
            block = 12;
            break;
            case 19:
            v495 = create_elem ( __consts_0.const_str__5 );
            v496 = create_elem ( __consts_0.const_str__6 );
            v497 = ll_dict_getitem__Dict_String__String__String ( msg_12,__consts_0.const_str__59 );
            v498 = new Object();
            v498.item0 = v497;
            v500 = v498.item0;
            v501 = new StringBuilder();
            v501.ll_append(__consts_0.const_str__60);
            v503 = ll_str__StringR_StringConst_String ( v500 );
            v501.ll_append(v503);
            v501.ll_append(__consts_0.const_str__61);
            v506 = v501.ll_build();
            v507 = create_text_elem ( v506 );
            v496.appendChild(v507);
            v495.appendChild(v496);
            module_part_0.appendChild(v495);
            block = 11;
            break;
            case 20:
            v514 = ll_dict_getitem__Dict_String__String__String ( msg_13,__consts_0.const_str__58 );
            v515 = get_elem ( v514 );
            v516 = !!v515;
            msg_14 = msg_13;
            if (v516 == false)
            {
                block = 21;
                break;
            }
            msg_15 = msg_13;
            module_part_1 = v515;
            block = 22;
            break;
            case 21:
            v517 = __consts_0.py____test_rsession_webjs_Globals.opending;
            ll_append__List_Dict_String__String___Dict_String__String_ ( v517,msg_14 );
            v442 = true;
            block = 12;
            break;
            case 22:
            v520 = create_elem ( __consts_0.const_str__5 );
            v521 = create_elem ( __consts_0.const_str__6 );
            v522 = create_elem ( __consts_0.const_str__62 );
            v524 = ll_dict_getitem__Dict_String__String__String ( msg_15,__consts_0.const_str__58 );
            v525 = new Object();
            v525.item0 = v524;
            v527 = v525.item0;
            v528 = new StringBuilder();
            v528.ll_append(__consts_0.const_str__63);
            v530 = ll_str__StringR_StringConst_String ( v527 );
            v528.ll_append(v530);
            v528.ll_append(__consts_0.const_str__27);
            v533 = v528.ll_build();
            v522.setAttribute(__consts_0.const_str__64,v533);
            v535 = create_text_elem ( __consts_0.const_str__65 );
            v522.appendChild(v535);
            v521.appendChild(v522);
            v520.appendChild(v521);
            module_part_1.appendChild(v520);
            v544 = ll_dict_getitem__Dict_String__String__String ( msg_15,__consts_0.const_str__58 );
            v545 = __consts_0.ExportedMethods;
            v546 = v545.show_fail(v544,fail_come_back);
            block = 11;
            break;
            case 23:
            v547 = ll_dict_getitem__Dict_String__String__String ( msg_16,__consts_0.const_str__66 );
            v548 = ll_dict_getitem__Dict_String__String__String ( msg_16,__consts_0.const_str__67 );
            v549 = ll_dict_getitem__Dict_String__String__String ( msg_16,__consts_0.const_str__68 );
            v550 = new Object();
            v550.item0 = v547;
            v550.item1 = v548;
            v550.item2 = v549;
            v554 = v550.item0;
            v555 = v550.item1;
            v556 = v550.item2;
            v557 = new StringBuilder();
            v557.ll_append(__consts_0.const_str__69);
            v559 = ll_str__StringR_StringConst_String ( v554 );
            v557.ll_append(v559);
            v557.ll_append(__consts_0.const_str__70);
            v562 = ll_str__StringR_StringConst_String ( v555 );
            v557.ll_append(v562);
            v557.ll_append(__consts_0.const_str__71);
            v565 = ll_str__StringR_StringConst_String ( v556 );
            v557.ll_append(v565);
            v557.ll_append(__consts_0.const_str__72);
            v568 = v557.ll_build();
            __consts_0.py____test_rsession_webjs_Globals.ofinished = true;
            v570 = new StringBuilder();
            v570.ll_append(__consts_0.const_str__73);
            v572 = ll_str__StringR_StringConst_String ( v568 );
            v570.ll_append(v572);
            v574 = v570.ll_build();
            __consts_0.Document.title = v574;
            v576 = new StringBuilder();
            v576.ll_append(__consts_0.const_str__43);
            v578 = ll_str__StringR_StringConst_String ( v568 );
            v576.ll_append(v578);
            v576.ll_append(__consts_0.const_str__44);
            v581 = v576.ll_build();
            v582 = __consts_0.Document;
            v583 = v582.getElementById(__consts_0.const_str__41);
            v584 = v583.childNodes;
            v585 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v584,0 );
            v585.nodeValue = v581;
            block = 11;
            break;
            case 24:
            v587 = ll_dict_getitem__Dict_String__String__String ( msg_17,__consts_0.const_str__74 );
            v588 = get_elem ( v587 );
            v589 = !!v588;
            msg_18 = msg_17;
            if (v589 == false)
            {
                block = 25;
                break;
            }
            v593 = msg_17;
            v594 = v588;
            block = 26;
            break;
            case 25:
            v590 = __consts_0.py____test_rsession_webjs_Globals.opending;
            ll_append__List_Dict_String__String___Dict_String__String_ ( v590,msg_18 );
            v442 = true;
            block = 12;
            break;
            case 26:
            add_received_item_outcome ( v593,v594 );
            block = 11;
            break;
            case 27:
            v596 = __consts_0.Document;
            v597 = ll_dict_getitem__Dict_String__String__String ( msg_19,__consts_0.const_str__75 );
            v598 = v596.getElementById(v597);
            v599 = v598.style;
            v599.background = __consts_0.const_str__76;
            v601 = __consts_0.py____test_rsession_webjs_Globals.ohost_dict;
            v602 = ll_dict_getitem__Dict_String__String__String ( msg_19,__consts_0.const_str__75 );
            v603 = ll_dict_getitem__Dict_String__String__String ( v601,v602 );
            v604 = new Object();
            v604.item0 = v603;
            v606 = v604.item0;
            v607 = new StringBuilder();
            v608 = ll_str__StringR_StringConst_String ( v606 );
            v607.ll_append(v608);
            v607.ll_append(__consts_0.const_str__77);
            v611 = v607.ll_build();
            v612 = v598.childNodes;
            v613 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v612,0 );
            v613.nodeValue = v611;
            block = 11;
            break;
            case 28:
            v615 = __consts_0.Document;
            v616 = ll_dict_getitem__Dict_String__String__String ( msg_20,__consts_0.const_str__75 );
            v617 = v615.getElementById(v616);
            v618 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v619 = ll_dict_getitem__Dict_String__String__String ( msg_20,__consts_0.const_str__75 );
            v620 = ll_dict_getitem__Dict_String__List_String___String ( v618,v619 );
            v622 = ll_dict_getitem__Dict_String__String__String ( msg_20,__consts_0.const_str__58 );
            ll_prepend__List_String__String ( v620,v622 );
            v624 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v625 = ll_dict_getitem__Dict_String__String__String ( msg_20,__consts_0.const_str__75 );
            v626 = ll_dict_getitem__Dict_String__List_String___String ( v624,v625 );
            v627 = ll_len__List_String_ ( v626 );
            v628 = __consts_0.py____test_rsession_webjs_Globals.ohost_dict;
            v629 = ll_dict_getitem__Dict_String__String__String ( msg_20,__consts_0.const_str__75 );
            v630 = ll_dict_getitem__Dict_String__String__String ( v628,v629 );
            v631 = new Object();
            v631.item0 = v630;
            v631.item1 = v627;
            v634 = v631.item0;
            v635 = v631.item1;
            v636 = new StringBuilder();
            v637 = ll_str__StringR_StringConst_String ( v634 );
            v636.ll_append(v637);
            v636.ll_append(__consts_0.const_str__78);
            v640 = ll_int_str__IntegerR_SignedConst_Signed ( v635 );
            v636.ll_append(v640);
            v636.ll_append(__consts_0.const_str__44);
            v643 = v636.ll_build();
            v644 = v617.childNodes;
            v645 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v644,0 );
            v645.nodeValue = v643;
            block = 11;
            break;
            case 29:
            v648 = make_module_box ( v647 );
            main_t_0.appendChild(v648);
            block = 11;
            break;
            case 12:
            return ( v442 );
        }
    }
}

function fail_come_back (msg_21) {
    var v700,v701,v702,v703,v707;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v700 = ll_dict_getitem__Dict_String__String__String ( msg_21,__consts_0.const_str__79 );
            v701 = ll_dict_getitem__Dict_String__String__String ( msg_21,__consts_0.const_str__80 );
            v702 = ll_dict_getitem__Dict_String__String__String ( msg_21,__consts_0.const_str__81 );
            v703 = new Object();
            v703.item0 = v700;
            v703.item1 = v701;
            v703.item2 = v702;
            v707 = ll_dict_getitem__Dict_String__String__String ( msg_21,__consts_0.const_str__82 );
            __consts_0.const_tuple[v707]=v703;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_listiter__Record_index__Signed__iterable_List_Dict_String__String__ (lst_1) {
    var v424,v425;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v425 = new Object();
            v425.iterable = lst_1;
            v425.index = 0;
            v424 = v425;
            block = 1;
            break;
            case 1:
            return ( v424 );
        }
    }
}

function scroll_down_if_needed (mbox_2) {
    var v669,v670,v671,v672,v673;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v669 = __consts_0.py____test_rsession_webjs_Options.oscroll;
            if (v669 == false)
            {
                block = 1;
                break;
            }
            v671 = mbox_2;
            block = 2;
            break;
            case 2:
            v672 = v671.parentNode;
            v672.scrollIntoView();
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function show_crash () {
    var v678,v679,v680,v681;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            __consts_0.py____test_rsession_webjs_Globals.ofinished = true;
            __consts_0.Document.title = __consts_0.const_str__83;
            v678 = __consts_0.Document;
            v679 = v678.getElementById(__consts_0.const_str__41);
            v680 = v679.childNodes;
            v681 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v680,0 );
            v681.nodeValue = __consts_0.const_str__84;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_len__List_String_ (l_13) {
    var v874,v875,v876;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v876 = l_13.length;
            v874 = v876;
            block = 1;
            break;
            case 1:
            return ( v874 );
        }
    }
}

function ll_char_mul__Char_Signed (ch_0,times_0) {
    var v651,v652,v653,ch_1,times_1,ch_2,times_2,v655,ch_3,times_3,buf_0,v656,ch_4,times_4,buf_1,i_4,v658,v659,v660,v661,v662,ch_5,times_5,buf_2,i_5,v663,v665;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v652 = (times_0<0);
            ch_1 = ch_0;
            times_1 = times_0;
            if (v652 == false)
            {
                block = 1;
                break;
            }
            ch_1 = ch_0;
            times_1 = 0;
            block = 1;
            break;
            case 1:
            undefined;
            ch_2 = ch_1;
            times_2 = times_1;
            block = 2;
            break;
            case 2:
            v655 = new StringBuilder();
            ch_3 = ch_2;
            times_3 = times_2;
            buf_0 = v655;
            block = 3;
            break;
            case 3:
            buf_0.ll_allocate(times_3);
            ch_4 = ch_3;
            times_4 = times_3;
            buf_1 = buf_0;
            i_4 = 0;
            block = 4;
            break;
            case 4:
            v658 = (i_4<times_4);
            v660 = buf_1;
            if (v658 == false)
            {
                block = 5;
                break;
            }
            ch_5 = ch_4;
            times_5 = times_4;
            buf_2 = buf_1;
            i_5 = i_4;
            block = 7;
            break;
            case 5:
            v662 = v660.ll_build();
            v651 = v662;
            block = 6;
            break;
            case 7:
            buf_2.ll_append_char(ch_5);
            v665 = (i_5+1);
            ch_4 = ch_5;
            times_4 = times_5;
            buf_1 = buf_2;
            i_4 = v665;
            block = 4;
            break;
            case 6:
            return ( v651 );
        }
    }
}

function ll_newlist__List_Dict_String__String__LlT_Signed (length_4) {
    var v666,v667;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v667 = ll_newlist__List_Dict_String__String__LlT_Signed_0 ( length_4 );
            v666 = v667;
            block = 1;
            break;
            case 1:
            return ( v666 );
        }
    }
}

function ll_int_str__IntegerR_SignedConst_Signed (i_6) {
    var v877,v878;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v878 = ll_int2dec__Signed ( i_6 );
            v877 = v878;
            block = 1;
            break;
            case 1:
            return ( v877 );
        }
    }
}

function show_interrupt () {
    var v686,v687,v688,v689;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            __consts_0.py____test_rsession_webjs_Globals.ofinished = true;
            __consts_0.Document.title = __consts_0.const_str__85;
            v686 = __consts_0.Document;
            v687 = v686.getElementById(__consts_0.const_str__41);
            v688 = v687.childNodes;
            v689 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v688,0 );
            v689.nodeValue = __consts_0.const_str__86;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_append__List_Dict_String__String___Dict_String__String_ (l_9,newitem_0) {
    var v692,v693,v694,v695,v697;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v693 = l_9.length;
            v695 = (v693+1);
            l_9.length = v695;
            l_9[v693]=newitem_0;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function add_received_item_outcome (msg_22,module_part_2) {
    var v710,v711,v712,msg_23,module_part_3,v713,v714,v715,v716,v718,v719,v721,v724,v726,v728,v729,v730,v731,msg_24,module_part_4,td_0,item_name_6,v732,v733,v734,v735,msg_25,module_part_5,td_1,item_name_7,v736,v737,v738,v739,v741,v742,v744,v747,v749,v750,v752,v754,v756,v757,msg_26,module_part_6,td_2,v758,v759,v760,v761,module_part_7,td_3,v762,v763,v764,v765,v767,v768,v769,v770,v771,v772,v776,v777,v778,v779,v780,v783,v786,v789,v790,v791,v793,v794,v795,msg_27,module_part_8,td_4,v797,v798,msg_28,module_part_9,td_5,item_name_8,v800,v801,v802,v803,msg_29,module_part_10,td_6,item_name_9,v804,v805,v806,v807,v808,v809,v811,v812,v814,v817,v819,v820,v822,msg_30,module_part_11,td_7,v824,v825,msg_31,module_part_12,v827,v828,v829,v830,v831,v832,v833,v834,v835,v836,v837,v838,v839,v840,v841,v842,v845,v846,v847,v848,v851,v854,v855,v856;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v710 = ll_dict_getitem__Dict_String__String__String ( msg_22,__consts_0.const_str__75 );
            v711 = ll_strlen__String ( v710 );
            v712 = !!v711;
            msg_23 = msg_22;
            module_part_3 = module_part_2;
            if (v712 == false)
            {
                block = 1;
                break;
            }
            msg_31 = msg_22;
            module_part_12 = module_part_2;
            block = 11;
            break;
            case 1:
            v713 = create_elem ( __consts_0.const_str__6 );
            v715 = ll_dict_getitem__Dict_String__String__String ( msg_23,__consts_0.const_str__58 );
            v716 = new Object();
            v716.item0 = v715;
            v718 = v716.item0;
            v719 = new StringBuilder();
            v719.ll_append(__consts_0.const_str__87);
            v721 = ll_str__StringR_StringConst_String ( v718 );
            v719.ll_append(v721);
            v719.ll_append(__consts_0.const_str__27);
            v724 = v719.ll_build();
            v713.setAttribute(__consts_0.const_str__28,v724);
            v713.setAttribute(__consts_0.const_str__29,__consts_0.const_str__88);
            v728 = ll_dict_getitem__Dict_String__String__String ( msg_23,__consts_0.const_str__58 );
            v729 = ll_dict_getitem__Dict_String__String__String ( msg_23,__consts_0.const_str__89 );
            v730 = ll_streq__String_String ( v729,__consts_0.const_str__11 );
            msg_24 = msg_23;
            module_part_4 = module_part_3;
            td_0 = v713;
            item_name_6 = v728;
            if (v730 == false)
            {
                block = 2;
                break;
            }
            msg_30 = msg_23;
            module_part_11 = module_part_3;
            td_7 = v713;
            block = 10;
            break;
            case 2:
            v732 = ll_dict_getitem__Dict_String__String__String ( msg_24,__consts_0.const_str__90 );
            v733 = ll_streq__String_String ( v732,__consts_0.const_str__91 );
            v734 = !v733;
            msg_25 = msg_24;
            module_part_5 = module_part_4;
            td_1 = td_0;
            item_name_7 = item_name_6;
            if (v734 == false)
            {
                block = 3;
                break;
            }
            msg_28 = msg_24;
            module_part_9 = module_part_4;
            td_5 = td_0;
            item_name_8 = item_name_6;
            block = 8;
            break;
            case 3:
            v736 = create_elem ( __consts_0.const_str__62 );
            v738 = ll_dict_getitem__Dict_String__String__String ( msg_25,__consts_0.const_str__58 );
            v739 = new Object();
            v739.item0 = v738;
            v741 = v739.item0;
            v742 = new StringBuilder();
            v742.ll_append(__consts_0.const_str__63);
            v744 = ll_str__StringR_StringConst_String ( v741 );
            v742.ll_append(v744);
            v742.ll_append(__consts_0.const_str__27);
            v747 = v742.ll_build();
            v736.setAttribute(__consts_0.const_str__64,v747);
            v749 = create_text_elem ( __consts_0.const_str__92 );
            v736.setAttribute(__consts_0.const_str__93,__consts_0.const_str__94);
            v736.appendChild(v749);
            td_1.appendChild(v736);
            v756 = __consts_0.ExportedMethods;
            v757 = v756.show_fail(item_name_7,fail_come_back);
            msg_26 = msg_25;
            module_part_6 = module_part_5;
            td_2 = td_1;
            block = 4;
            break;
            case 4:
            v758 = ll_dict_getitem__Dict_String__String__String ( msg_26,__consts_0.const_str__74 );
            v759 = ll_dict_getitem__Dict_String__Signed__String ( __consts_0.const_tuple__95,v758 );
            v760 = (v759==0);
            module_part_7 = module_part_6;
            td_3 = td_2;
            v762 = msg_26;
            if (v760 == false)
            {
                block = 5;
                break;
            }
            msg_27 = msg_26;
            module_part_8 = module_part_6;
            td_4 = td_2;
            block = 7;
            break;
            case 5:
            v763 = ll_dict_getitem__Dict_String__String__String ( v762,__consts_0.const_str__74 );
            v764 = ll_dict_getitem__Dict_String__Signed__String ( __consts_0.const_tuple__95,v763 );
            v765 = (v764+1);
            __consts_0.const_tuple__95[v763]=v765;
            v767 = ll_strconcat__String_String ( __consts_0.const_str__96,v763 );
            v768 = get_elem ( v767 );
            v769 = ll_dict_getitem__Dict_String__String__String ( __consts_0.const_tuple__97,v763 );
            v770 = ll_dict_getitem__Dict_String__Signed__String ( __consts_0.const_tuple__95,v763 );
            v771 = ll_dict_getitem__Dict_String__Signed__String ( __consts_0.const_tuple__98,v763 );
            v772 = new Object();
            v772.item0 = v769;
            v772.item1 = v770;
            v772.item2 = v771;
            v776 = v772.item0;
            v777 = v772.item1;
            v778 = v772.item2;
            v779 = new StringBuilder();
            v780 = ll_str__StringR_StringConst_String ( v776 );
            v779.ll_append(v780);
            v779.ll_append(__consts_0.const_str__78);
            v783 = convertToString ( v777 );
            v779.ll_append(v783);
            v779.ll_append(__consts_0.const_str__99);
            v786 = convertToString ( v778 );
            v779.ll_append(v786);
            v779.ll_append(__consts_0.const_str__44);
            v789 = v779.ll_build();
            v790 = v768.childNodes;
            v791 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v790,0 );
            v791.nodeValue = v789;
            v793 = module_part_7.childNodes;
            v794 = ll_getitem__dum_nocheckConst_List_ExternalType_Element___Signed ( v793,-1 );
            v794.appendChild(td_3);
            block = 6;
            break;
            case 7:
            v797 = create_elem ( __consts_0.const_str__5 );
            module_part_8.appendChild(v797);
            module_part_7 = module_part_8;
            td_3 = td_4;
            v762 = msg_27;
            block = 5;
            break;
            case 8:
            v800 = ll_dict_getitem__Dict_String__String__String ( msg_28,__consts_0.const_str__90 );
            v801 = ll_streq__String_String ( v800,__consts_0.const_str__100 );
            v802 = !v801;
            msg_25 = msg_28;
            module_part_5 = module_part_9;
            td_1 = td_5;
            item_name_7 = item_name_8;
            if (v802 == false)
            {
                block = 3;
                break;
            }
            msg_29 = msg_28;
            module_part_10 = module_part_9;
            td_6 = td_5;
            item_name_9 = item_name_8;
            block = 9;
            break;
            case 9:
            v804 = __consts_0.ExportedMethods;
            v805 = v804.show_skip(item_name_9,skip_come_back);
            v806 = create_elem ( __consts_0.const_str__62 );
            v808 = ll_dict_getitem__Dict_String__String__String ( msg_29,__consts_0.const_str__58 );
            v809 = new Object();
            v809.item0 = v808;
            v811 = v809.item0;
            v812 = new StringBuilder();
            v812.ll_append(__consts_0.const_str__101);
            v814 = ll_str__StringR_StringConst_String ( v811 );
            v812.ll_append(v814);
            v812.ll_append(__consts_0.const_str__27);
            v817 = v812.ll_build();
            v806.setAttribute(__consts_0.const_str__64,v817);
            v819 = create_text_elem ( __consts_0.const_str__102 );
            v806.appendChild(v819);
            td_6.appendChild(v806);
            msg_26 = msg_29;
            module_part_6 = module_part_10;
            td_2 = td_6;
            block = 4;
            break;
            case 10:
            v824 = create_text_elem ( __consts_0.const_str__103 );
            td_7.appendChild(v824);
            msg_26 = msg_30;
            module_part_6 = module_part_11;
            td_2 = td_7;
            block = 4;
            break;
            case 11:
            v827 = __consts_0.Document;
            v828 = ll_dict_getitem__Dict_String__String__String ( msg_31,__consts_0.const_str__75 );
            v829 = v827.getElementById(v828);
            v830 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v831 = ll_dict_getitem__Dict_String__String__String ( msg_31,__consts_0.const_str__75 );
            v832 = ll_dict_getitem__Dict_String__List_String___String ( v830,v831 );
            v834 = ll_pop_default__dum_nocheckConst_List_String_ ( v832 );
            v835 = __consts_0.py____test_rsession_webjs_Globals.ohost_pending;
            v836 = ll_dict_getitem__Dict_String__String__String ( msg_31,__consts_0.const_str__75 );
            v837 = ll_dict_getitem__Dict_String__List_String___String ( v835,v836 );
            v838 = ll_len__List_String_ ( v837 );
            v839 = __consts_0.py____test_rsession_webjs_Globals.ohost_dict;
            v840 = ll_dict_getitem__Dict_String__String__String ( msg_31,__consts_0.const_str__75 );
            v841 = ll_dict_getitem__Dict_String__String__String ( v839,v840 );
            v842 = new Object();
            v842.item0 = v841;
            v842.item1 = v838;
            v845 = v842.item0;
            v846 = v842.item1;
            v847 = new StringBuilder();
            v848 = ll_str__StringR_StringConst_String ( v845 );
            v847.ll_append(v848);
            v847.ll_append(__consts_0.const_str__78);
            v851 = ll_int_str__IntegerR_SignedConst_Signed ( v846 );
            v847.ll_append(v851);
            v847.ll_append(__consts_0.const_str__44);
            v854 = v847.ll_build();
            v855 = v829.childNodes;
            v856 = ll_getitem_nonneg__dum_nocheckConst_List_ExternalType_Element___Signed ( v855,0 );
            v856.nodeValue = v854;
            msg_23 = msg_31;
            module_part_3 = module_part_12;
            block = 1;
            break;
            case 6:
            return ( undefined );
        }
    }
}

function make_module_box (msg_32) {
    var v879,v880,v881,v882,v884,v885,v886,v887,v890,v891,v892,v893,v896,v899,v900,v902,v903,v904,v906,v907,v909,v910,v912,v913,v914,v916,v917,v919,v922,v924,v926,v927,v929,v930,v932,v933,v935,v937;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v880 = create_elem ( __consts_0.const_str__5 );
            v881 = create_elem ( __consts_0.const_str__6 );
            v880.appendChild(v881);
            v885 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__104 );
            v886 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__105 );
            v887 = new Object();
            v887.item0 = v885;
            v887.item1 = v886;
            v890 = v887.item0;
            v891 = v887.item1;
            v892 = new StringBuilder();
            v893 = ll_str__StringR_StringConst_String ( v890 );
            v892.ll_append(v893);
            v892.ll_append(__consts_0.const_str__106);
            v896 = ll_str__StringR_StringConst_String ( v891 );
            v892.ll_append(v896);
            v892.ll_append(__consts_0.const_str__44);
            v899 = v892.ll_build();
            v900 = create_text_elem ( v899 );
            v881.appendChild(v900);
            v902 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__105 );
            v903 = ll_int__String_Signed ( v902,10 );
            v904 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            __consts_0.const_tuple__98[v904]=v903;
            v906 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__104 );
            v907 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            __consts_0.const_tuple__97[v907]=v906;
            v909 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            v910 = ll_strconcat__String_String ( __consts_0.const_str__96,v909 );
            v881.id = v910;
            v913 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            v914 = new Object();
            v914.item0 = v913;
            v916 = v914.item0;
            v917 = new StringBuilder();
            v917.ll_append(__consts_0.const_str__87);
            v919 = ll_str__StringR_StringConst_String ( v916 );
            v917.ll_append(v919);
            v917.ll_append(__consts_0.const_str__27);
            v922 = v917.ll_build();
            v881.setAttribute(__consts_0.const_str__28,v922);
            v881.setAttribute(__consts_0.const_str__29,__consts_0.const_str__88);
            v926 = create_elem ( __consts_0.const_str__6 );
            v880.appendChild(v926);
            v929 = create_elem ( __consts_0.const_str__107 );
            v926.appendChild(v929);
            v932 = create_elem ( __consts_0.const_str__3 );
            v933 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            v932.id = v933;
            v929.appendChild(v932);
            v937 = ll_dict_getitem__Dict_String__String__String ( msg_32,__consts_0.const_str__58 );
            __consts_0.const_tuple__95[v937]=0;
            v879 = v880;
            block = 1;
            break;
            case 1:
            return ( v879 );
        }
    }
}

function ll_prepend__List_String__String (l_10,newitem_1) {
    var v859,v860,v861,v862,l_11,newitem_2,dst_0,v864,v865,newitem_3,v866,v867,l_12,newitem_4,dst_1,v869,v870,v871,v872;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v860 = l_10.length;
            v862 = (v860+1);
            l_10.length = v862;
            l_11 = l_10;
            newitem_2 = newitem_1;
            dst_0 = v860;
            block = 1;
            break;
            case 1:
            v864 = (dst_0>0);
            newitem_3 = newitem_2;
            v866 = l_11;
            if (v864 == false)
            {
                block = 2;
                break;
            }
            l_12 = l_11;
            newitem_4 = newitem_2;
            dst_1 = dst_0;
            block = 4;
            break;
            case 2:
            v866[0]=newitem_3;
            block = 3;
            break;
            case 4:
            v869 = (dst_1-1);
            v872 = l_12[v869];
            l_12[dst_1]=v872;
            l_11 = l_12;
            newitem_2 = newitem_4;
            dst_0 = v869;
            block = 1;
            break;
            case 3:
            return ( undefined );
        }
    }
}

function skip_come_back (msg_33) {
    var v973,v974;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v973 = ll_dict_getitem__Dict_String__String__String ( msg_33,__consts_0.const_str__59 );
            v974 = ll_dict_getitem__Dict_String__String__String ( msg_33,__consts_0.const_str__82 );
            __consts_0.const_tuple__23[v974]=v973;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function ll_getitem__dum_nocheckConst_List_ExternalType_Element___Signed (l_14,index_5) {
    var v958,v959,v960,v961,v962,l_15,index_6,length_6,v963,v965,index_7,v967,v968,v969,l_16,length_7,v970,v971;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v960 = l_14.length;
            v961 = (index_5<0);
            l_15 = l_14;
            index_6 = index_5;
            length_6 = v960;
            if (v961 == false)
            {
                block = 1;
                break;
            }
            l_16 = l_14;
            length_7 = v960;
            v970 = index_5;
            block = 4;
            break;
            case 1:
            v963 = (index_6>=0);
            v965 = (index_6<length_6);
            index_7 = index_6;
            v967 = l_15;
            block = 2;
            break;
            case 2:
            v969 = v967[index_7];
            v958 = v969;
            block = 3;
            break;
            case 4:
            v971 = (v970+length_7);
            l_15 = l_16;
            index_6 = v971;
            length_6 = length_7;
            block = 1;
            break;
            case 3:
            return ( v958 );
        }
    }
}

function ll_dict_getitem__Dict_String__Signed__String (d_4,key_8) {
    var v948,v949,v950,v951,v952,v953,v954,etype_6,evalue_6,key_9,v955,v956,v957;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v950 = (d_4[key_8]!=undefined);
            if (v950 == false)
            {
                block = 1;
                break;
            }
            key_9 = key_8;
            v955 = d_4;
            block = 3;
            break;
            case 1:
            v952 = __consts_0.exceptions_KeyError;
            v953 = v952.meta;
            etype_6 = v953;
            evalue_6 = v952;
            block = 2;
            break;
            case 3:
            v957 = v955[key_9];
            v948 = v957;
            block = 4;
            break;
            case 2:
            throw(evalue_6);
            case 4:
            return ( v948 );
        }
    }
}

function ll_newlist__List_Dict_String__String__LlT_Signed_0 (length_5) {
    var v939,v940,v941;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v940 = new Array();
            v940.length = length_5;
            v939 = v940;
            block = 1;
            break;
            case 1:
            return ( v939 );
        }
    }
}

function ll_int2dec__Signed (i_7) {
    var v943,v944;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v944 = convertToString ( i_7 );
            v943 = v944;
            block = 1;
            break;
            case 1:
            return ( v943 );
        }
    }
}

function ll_pop_default__dum_nocheckConst_List_String_ (l_17) {
    var v976,v977,v978,l_18,length_8,v979,v981,v982,v983,newlength_0,res_0,v985,v986;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v978 = l_17.length;
            l_18 = l_17;
            length_8 = v978;
            block = 1;
            break;
            case 1:
            v979 = (length_8>0);
            v981 = (length_8-1);
            v983 = l_18[v981];
            ll_null_item__List_String_ ( l_18 );
            newlength_0 = v981;
            res_0 = v983;
            v985 = l_18;
            block = 2;
            break;
            case 2:
            v985.length = newlength_0;
            v976 = res_0;
            block = 3;
            break;
            case 3:
            return ( v976 );
        }
    }
}

function ll_int__String_Signed (s_2,base_0) {
    var v988,v989,v990,v991,v992,v993,etype_7,evalue_7,s_3,base_1,v994,s_4,base_2,v995,v996,s_5,base_3,v997,v998,s_6,base_4,strlen_0,i_8,v999,v1000,s_7,base_5,strlen_1,i_9,v1001,v1002,v1003,v1004,v1005,s_8,base_6,strlen_2,i_10,v1006,v1007,v1008,v1009,s_9,base_7,strlen_3,i_11,v1010,v1011,v1012,v1013,s_10,base_8,strlen_4,i_12,sign_0,v1014,v1015,s_11,base_9,strlen_5,i_13,sign_1,val_0,oldpos_0,v1016,v1017,s_12,strlen_6,i_14,sign_2,val_1,v1018,v1019,v1020,s_13,strlen_7,i_15,sign_3,val_2,v1021,v1022,sign_4,val_3,v1023,v1024,v1025,v1026,v1027,v1028,v1029,v1030,v1031,v1032,s_14,strlen_8,i_16,sign_5,val_4,v1033,v1034,v1035,v1036,s_15,strlen_9,sign_6,val_5,v1037,v1038,v1039,v1040,v1041,s_16,base_10,strlen_10,i_17,sign_7,val_6,oldpos_1,v1042,v1043,v1044,v1045,v1046,s_17,base_11,strlen_11,i_18,sign_8,val_7,oldpos_2,c_0,v1047,v1048,s_18,base_12,strlen_12,i_19,sign_9,val_8,oldpos_3,c_1,v1049,v1050,s_19,base_13,strlen_13,i_20,sign_10,val_9,oldpos_4,c_2,v1051,s_20,base_14,strlen_14,i_21,sign_11,val_10,oldpos_5,c_3,v1052,v1053,s_21,base_15,strlen_15,i_22,sign_12,val_11,oldpos_6,v1054,v1055,s_22,base_16,strlen_16,i_23,sign_13,val_12,oldpos_7,digit_0,v1056,v1057,s_23,base_17,strlen_17,i_24,sign_14,oldpos_8,digit_1,v1058,v1059,v1060,v1061,s_24,base_18,strlen_18,i_25,sign_15,val_13,oldpos_9,c_4,v1062,s_25,base_19,strlen_19,i_26,sign_16,val_14,oldpos_10,c_5,v1063,v1064,s_26,base_20,strlen_20,i_27,sign_17,val_15,oldpos_11,v1065,v1066,v1067,s_27,base_21,strlen_21,i_28,sign_18,val_16,oldpos_12,c_6,v1068,s_28,base_22,strlen_22,i_29,sign_19,val_17,oldpos_13,c_7,v1069,v1070,s_29,base_23,strlen_23,i_30,sign_20,val_18,oldpos_14,v1071,v1072,v1073,s_30,base_24,strlen_24,i_31,sign_21,v1074,v1075,v1076,v1077,s_31,base_25,strlen_25,sign_22,v1078,v1079,s_32,base_26,strlen_26,v1080,v1081,s_33,base_27,strlen_27,v1082,v1083,s_34,base_28,strlen_28,i_32,v1084,v1085,v1086,v1087,s_35,base_29,strlen_29,v1088,v1089;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v989 = (2<=base_0);
            if (v989 == false)
            {
                block = 1;
                break;
            }
            s_3 = s_2;
            base_1 = base_0;
            block = 3;
            break;
            case 1:
            v991 = __consts_0.exceptions_ValueError;
            v992 = v991.meta;
            etype_7 = v992;
            evalue_7 = v991;
            block = 2;
            break;
            case 3:
            v994 = (base_1<=36);
            s_4 = s_3;
            base_2 = base_1;
            v995 = v994;
            block = 4;
            break;
            case 4:
            if (v995 == false)
            {
                block = 1;
                break;
            }
            s_5 = s_4;
            base_3 = base_2;
            block = 5;
            break;
            case 5:
            v998 = s_5.length;
            s_6 = s_5;
            base_4 = base_3;
            strlen_0 = v998;
            i_8 = 0;
            block = 6;
            break;
            case 6:
            v999 = (i_8<strlen_0);
            s_7 = s_6;
            base_5 = base_4;
            strlen_1 = strlen_0;
            i_9 = i_8;
            if (v999 == false)
            {
                block = 7;
                break;
            }
            s_34 = s_6;
            base_28 = base_4;
            strlen_28 = strlen_0;
            i_32 = i_8;
            block = 40;
            break;
            case 7:
            v1001 = (i_9<strlen_1);
            if (v1001 == false)
            {
                block = 8;
                break;
            }
            s_8 = s_7;
            base_6 = base_5;
            strlen_2 = strlen_1;
            i_10 = i_9;
            block = 9;
            break;
            case 8:
            v1003 = __consts_0.exceptions_ValueError;
            v1004 = v1003.meta;
            etype_7 = v1004;
            evalue_7 = v1003;
            block = 2;
            break;
            case 9:
            v1007 = s_8.charAt(i_10);
            v1008 = (v1007=='-');
            s_9 = s_8;
            base_7 = base_6;
            strlen_3 = strlen_2;
            i_11 = i_10;
            if (v1008 == false)
            {
                block = 10;
                break;
            }
            s_33 = s_8;
            base_27 = base_6;
            strlen_27 = strlen_2;
            v1082 = i_10;
            block = 39;
            break;
            case 10:
            v1011 = s_9.charAt(i_11);
            v1012 = (v1011=='+');
            s_10 = s_9;
            base_8 = base_7;
            strlen_4 = strlen_3;
            i_12 = i_11;
            sign_0 = 1;
            if (v1012 == false)
            {
                block = 11;
                break;
            }
            s_32 = s_9;
            base_26 = base_7;
            strlen_26 = strlen_3;
            v1080 = i_11;
            block = 38;
            break;
            case 11:
            v1014 = (i_12<strlen_4);
            s_11 = s_10;
            base_9 = base_8;
            strlen_5 = strlen_4;
            i_13 = i_12;
            sign_1 = sign_0;
            val_0 = 0;
            oldpos_0 = i_12;
            if (v1014 == false)
            {
                block = 12;
                break;
            }
            s_30 = s_10;
            base_24 = base_8;
            strlen_24 = strlen_4;
            i_31 = i_12;
            sign_21 = sign_0;
            block = 36;
            break;
            case 12:
            v1016 = (i_13<strlen_5);
            s_12 = s_11;
            strlen_6 = strlen_5;
            i_14 = i_13;
            sign_2 = sign_1;
            val_1 = val_0;
            v1018 = oldpos_0;
            if (v1016 == false)
            {
                block = 13;
                break;
            }
            s_16 = s_11;
            base_10 = base_9;
            strlen_10 = strlen_5;
            i_17 = i_13;
            sign_7 = sign_1;
            val_6 = val_0;
            oldpos_1 = oldpos_0;
            block = 22;
            break;
            case 13:
            v1019 = (i_14==v1018);
            s_13 = s_12;
            strlen_7 = strlen_6;
            i_15 = i_14;
            sign_3 = sign_2;
            val_2 = val_1;
            if (v1019 == false)
            {
                block = 14;
                break;
            }
            block = 21;
            break;
            case 14:
            v1021 = (i_15<strlen_7);
            sign_4 = sign_3;
            val_3 = val_2;
            v1023 = i_15;
            v1024 = strlen_7;
            if (v1021 == false)
            {
                block = 15;
                break;
            }
            s_14 = s_13;
            strlen_8 = strlen_7;
            i_16 = i_15;
            sign_5 = sign_3;
            val_4 = val_2;
            block = 19;
            break;
            case 15:
            v1025 = (v1023==v1024);
            if (v1025 == false)
            {
                block = 16;
                break;
            }
            v1030 = sign_4;
            v1031 = val_3;
            block = 17;
            break;
            case 16:
            v1027 = __consts_0.exceptions_ValueError;
            v1028 = v1027.meta;
            etype_7 = v1028;
            evalue_7 = v1027;
            block = 2;
            break;
            case 17:
            v1032 = (v1030*v1031);
            v988 = v1032;
            block = 18;
            break;
            case 19:
            v1034 = s_14.charAt(i_16);
            v1035 = (v1034==' ');
            sign_4 = sign_5;
            val_3 = val_4;
            v1023 = i_16;
            v1024 = strlen_8;
            if (v1035 == false)
            {
                block = 15;
                break;
            }
            s_15 = s_14;
            strlen_9 = strlen_8;
            sign_6 = sign_5;
            val_5 = val_4;
            v1037 = i_16;
            block = 20;
            break;
            case 20:
            v1038 = (v1037+1);
            s_13 = s_15;
            strlen_7 = strlen_9;
            i_15 = v1038;
            sign_3 = sign_6;
            val_2 = val_5;
            block = 14;
            break;
            case 21:
            v1039 = __consts_0.exceptions_ValueError;
            v1040 = v1039.meta;
            etype_7 = v1040;
            evalue_7 = v1039;
            block = 2;
            break;
            case 22:
            v1043 = s_16.charAt(i_17);
            v1044 = v1043.charCodeAt(0);
            v1045 = (97<=v1044);
            s_17 = s_16;
            base_11 = base_10;
            strlen_11 = strlen_10;
            i_18 = i_17;
            sign_8 = sign_7;
            val_7 = val_6;
            oldpos_2 = oldpos_1;
            c_0 = v1044;
            if (v1045 == false)
            {
                block = 23;
                break;
            }
            s_27 = s_16;
            base_21 = base_10;
            strlen_21 = strlen_10;
            i_28 = i_17;
            sign_18 = sign_7;
            val_16 = val_6;
            oldpos_12 = oldpos_1;
            c_6 = v1044;
            block = 33;
            break;
            case 23:
            v1047 = (65<=c_0);
            s_18 = s_17;
            base_12 = base_11;
            strlen_12 = strlen_11;
            i_19 = i_18;
            sign_9 = sign_8;
            val_8 = val_7;
            oldpos_3 = oldpos_2;
            c_1 = c_0;
            if (v1047 == false)
            {
                block = 24;
                break;
            }
            s_24 = s_17;
            base_18 = base_11;
            strlen_18 = strlen_11;
            i_25 = i_18;
            sign_15 = sign_8;
            val_13 = val_7;
            oldpos_9 = oldpos_2;
            c_4 = c_0;
            block = 30;
            break;
            case 24:
            v1049 = (48<=c_1);
            s_12 = s_18;
            strlen_6 = strlen_12;
            i_14 = i_19;
            sign_2 = sign_9;
            val_1 = val_8;
            v1018 = oldpos_3;
            if (v1049 == false)
            {
                block = 13;
                break;
            }
            s_19 = s_18;
            base_13 = base_12;
            strlen_13 = strlen_12;
            i_20 = i_19;
            sign_10 = sign_9;
            val_9 = val_8;
            oldpos_4 = oldpos_3;
            c_2 = c_1;
            block = 25;
            break;
            case 25:
            v1051 = (c_2<=57);
            s_20 = s_19;
            base_14 = base_13;
            strlen_14 = strlen_13;
            i_21 = i_20;
            sign_11 = sign_10;
            val_10 = val_9;
            oldpos_5 = oldpos_4;
            c_3 = c_2;
            v1052 = v1051;
            block = 26;
            break;
            case 26:
            s_12 = s_20;
            strlen_6 = strlen_14;
            i_14 = i_21;
            sign_2 = sign_11;
            val_1 = val_10;
            v1018 = oldpos_5;
            if (v1052 == false)
            {
                block = 13;
                break;
            }
            s_21 = s_20;
            base_15 = base_14;
            strlen_15 = strlen_14;
            i_22 = i_21;
            sign_12 = sign_11;
            val_11 = val_10;
            oldpos_6 = oldpos_5;
            v1054 = c_3;
            block = 27;
            break;
            case 27:
            v1055 = (v1054-48);
            s_22 = s_21;
            base_16 = base_15;
            strlen_16 = strlen_15;
            i_23 = i_22;
            sign_13 = sign_12;
            val_12 = val_11;
            oldpos_7 = oldpos_6;
            digit_0 = v1055;
            block = 28;
            break;
            case 28:
            v1056 = (digit_0>=base_16);
            s_23 = s_22;
            base_17 = base_16;
            strlen_17 = strlen_16;
            i_24 = i_23;
            sign_14 = sign_13;
            oldpos_8 = oldpos_7;
            digit_1 = digit_0;
            v1058 = val_12;
            if (v1056 == false)
            {
                block = 29;
                break;
            }
            s_12 = s_22;
            strlen_6 = strlen_16;
            i_14 = i_23;
            sign_2 = sign_13;
            val_1 = val_12;
            v1018 = oldpos_7;
            block = 13;
            break;
            case 29:
            v1059 = (v1058*base_17);
            v1060 = (v1059+digit_1);
            v1061 = (i_24+1);
            s_11 = s_23;
            base_9 = base_17;
            strlen_5 = strlen_17;
            i_13 = v1061;
            sign_1 = sign_14;
            val_0 = v1060;
            oldpos_0 = oldpos_8;
            block = 12;
            break;
            case 30:
            v1062 = (c_4<=90);
            s_25 = s_24;
            base_19 = base_18;
            strlen_19 = strlen_18;
            i_26 = i_25;
            sign_16 = sign_15;
            val_14 = val_13;
            oldpos_10 = oldpos_9;
            c_5 = c_4;
            v1063 = v1062;
            block = 31;
            break;
            case 31:
            s_18 = s_25;
            base_12 = base_19;
            strlen_12 = strlen_19;
            i_19 = i_26;
            sign_9 = sign_16;
            val_8 = val_14;
            oldpos_3 = oldpos_10;
            c_1 = c_5;
            if (v1063 == false)
            {
                block = 24;
                break;
            }
            s_26 = s_25;
            base_20 = base_19;
            strlen_20 = strlen_19;
            i_27 = i_26;
            sign_17 = sign_16;
            val_15 = val_14;
            oldpos_11 = oldpos_10;
            v1065 = c_5;
            block = 32;
            break;
            case 32:
            v1066 = (v1065-65);
            v1067 = (v1066+10);
            s_22 = s_26;
            base_16 = base_20;
            strlen_16 = strlen_20;
            i_23 = i_27;
            sign_13 = sign_17;
            val_12 = val_15;
            oldpos_7 = oldpos_11;
            digit_0 = v1067;
            block = 28;
            break;
            case 33:
            v1068 = (c_6<=122);
            s_28 = s_27;
            base_22 = base_21;
            strlen_22 = strlen_21;
            i_29 = i_28;
            sign_19 = sign_18;
            val_17 = val_16;
            oldpos_13 = oldpos_12;
            c_7 = c_6;
            v1069 = v1068;
            block = 34;
            break;
            case 34:
            s_17 = s_28;
            base_11 = base_22;
            strlen_11 = strlen_22;
            i_18 = i_29;
            sign_8 = sign_19;
            val_7 = val_17;
            oldpos_2 = oldpos_13;
            c_0 = c_7;
            if (v1069 == false)
            {
                block = 23;
                break;
            }
            s_29 = s_28;
            base_23 = base_22;
            strlen_23 = strlen_22;
            i_30 = i_29;
            sign_20 = sign_19;
            val_18 = val_17;
            oldpos_14 = oldpos_13;
            v1071 = c_7;
            block = 35;
            break;
            case 35:
            v1072 = (v1071-97);
            v1073 = (v1072+10);
            s_22 = s_29;
            base_16 = base_23;
            strlen_16 = strlen_23;
            i_23 = i_30;
            sign_13 = sign_20;
            val_12 = val_18;
            oldpos_7 = oldpos_14;
            digit_0 = v1073;
            block = 28;
            break;
            case 36:
            v1075 = s_30.charAt(i_31);
            v1076 = (v1075==' ');
            s_11 = s_30;
            base_9 = base_24;
            strlen_5 = strlen_24;
            i_13 = i_31;
            sign_1 = sign_21;
            val_0 = 0;
            oldpos_0 = i_31;
            if (v1076 == false)
            {
                block = 12;
                break;
            }
            s_31 = s_30;
            base_25 = base_24;
            strlen_25 = strlen_24;
            sign_22 = sign_21;
            v1078 = i_31;
            block = 37;
            break;
            case 37:
            v1079 = (v1078+1);
            s_10 = s_31;
            base_8 = base_25;
            strlen_4 = strlen_25;
            i_12 = v1079;
            sign_0 = sign_22;
            block = 11;
            break;
            case 38:
            v1081 = (v1080+1);
            s_10 = s_32;
            base_8 = base_26;
            strlen_4 = strlen_26;
            i_12 = v1081;
            sign_0 = 1;
            block = 11;
            break;
            case 39:
            v1083 = (v1082+1);
            s_10 = s_33;
            base_8 = base_27;
            strlen_4 = strlen_27;
            i_12 = v1083;
            sign_0 = -1;
            block = 11;
            break;
            case 40:
            v1085 = s_34.charAt(i_32);
            v1086 = (v1085==' ');
            s_7 = s_34;
            base_5 = base_28;
            strlen_1 = strlen_28;
            i_9 = i_32;
            if (v1086 == false)
            {
                block = 7;
                break;
            }
            s_35 = s_34;
            base_29 = base_28;
            strlen_29 = strlen_28;
            v1088 = i_32;
            block = 41;
            break;
            case 41:
            v1089 = (v1088+1);
            s_6 = s_35;
            base_4 = base_29;
            strlen_0 = strlen_29;
            i_8 = v1089;
            block = 6;
            break;
            case 2:
            throw(evalue_7);
            case 18:
            return ( v988 );
        }
    }
}

function ll_strlen__String (obj_1) {
    var v945,v946,v947;
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            v947 = obj_1.length;
            v945 = v947;
            block = 1;
            break;
            case 1:
            return ( v945 );
        }
    }
}

function exceptions_ValueError () {
}

exceptions_ValueError.prototype.toString = function (){
    return ( '<exceptions.ValueError object>' );
}

inherits(exceptions_ValueError,exceptions_StandardError);
function ll_null_item__List_String_ (lst_2) {
    var block = 0;
    for(;;){
        switch(block){
            case 0:
            undefined;
            block = 1;
            break;
            case 1:
            return ( undefined );
        }
    }
}

function Object_meta () {
    this.class_ = __consts_0.None;
}

Object_meta.prototype.toString = function (){
    return ( '<Object_meta object>' );
}

function exceptions_Exception_meta () {
}

exceptions_Exception_meta.prototype.toString = function (){
    return ( '<exceptions.Exception_meta object>' );
}

inherits(exceptions_Exception_meta,Object_meta);
function exceptions_StandardError_meta () {
}

exceptions_StandardError_meta.prototype.toString = function (){
    return ( '<exceptions.StandardError_meta object>' );
}

inherits(exceptions_StandardError_meta,exceptions_Exception_meta);
function exceptions_AssertionError_meta () {
}

exceptions_AssertionError_meta.prototype.toString = function (){
    return ( '<exceptions.AssertionError_meta object>' );
}

inherits(exceptions_AssertionError_meta,exceptions_StandardError_meta);
function py____magic_assertion_AssertionError_meta () {
}

py____magic_assertion_AssertionError_meta.prototype.toString = function (){
    return ( '<py.__.magic.assertion.AssertionError_meta object>' );
}

inherits(py____magic_assertion_AssertionError_meta,exceptions_AssertionError_meta);
function exceptions_ValueError_meta () {
}

exceptions_ValueError_meta.prototype.toString = function (){
    return ( '<exceptions.ValueError_meta object>' );
}

inherits(exceptions_ValueError_meta,exceptions_StandardError_meta);
function exceptions_LookupError_meta () {
}

exceptions_LookupError_meta.prototype.toString = function (){
    return ( '<exceptions.LookupError_meta object>' );
}

inherits(exceptions_LookupError_meta,exceptions_StandardError_meta);
function exceptions_KeyError_meta () {
}

exceptions_KeyError_meta.prototype.toString = function (){
    return ( '<exceptions.KeyError_meta object>' );
}

inherits(exceptions_KeyError_meta,exceptions_LookupError_meta);
function py____test_rsession_webjs_Options_meta () {
}

py____test_rsession_webjs_Options_meta.prototype.toString = function (){
    return ( '<py.__.test.rsession.webjs.Options_meta object>' );
}

inherits(py____test_rsession_webjs_Options_meta,Object_meta);
function exceptions_StopIteration_meta () {
}

exceptions_StopIteration_meta.prototype.toString = function (){
    return ( '<exceptions.StopIteration_meta object>' );
}

inherits(exceptions_StopIteration_meta,exceptions_Exception_meta);
function py____test_rsession_webjs_Globals_meta () {
}

py____test_rsession_webjs_Globals_meta.prototype.toString = function (){
    return ( '<py.__.test.rsession.webjs.Globals_meta object>' );
}

inherits(py____test_rsession_webjs_Globals_meta,Object_meta);
__consts_0 = {};
__consts_0.const_str__71 = ' failures, ';
__consts_0.const_str__26 = "show_host('";
__consts_0.const_str__70 = ' run, ';
__consts_0.const_str__62 = 'a';
__consts_0.const_str__93 = 'class';
__consts_0.const_str__44 = ']';
__consts_0.const_str__72 = ' skipped';
__consts_0.const_tuple = {};
__consts_0.const_str__51 = 'ReceivedItemOutcome';
__consts_0.const_str__87 = "show_info('";
__consts_0.py____test_rsession_webjs_Options__114 = py____test_rsession_webjs_Options;
__consts_0.py____test_rsession_webjs_Options_meta = new py____test_rsession_webjs_Options_meta();
__consts_0.const_str__60 = '- skipped (';
__consts_0.const_str__30 = 'hide_host()';
__consts_0.const_str__88 = 'hide_info()';
__consts_0.const_str__40 = '#message';
__consts_0.ExportedMethods = new ExportedMethods();
__consts_0.const_str__3 = 'tbody';
__consts_0.const_str__83 = 'Py.test [crashed]';
__consts_0.const_str__61 = ')';
__consts_0.const_str__46 = 'main_table';
__consts_0.const_str__86 = 'Tests [interrupted]';
__consts_0.exceptions_KeyError__118 = exceptions_KeyError;
__consts_0.const_str__27 = "')";
__consts_0.const_str__55 = 'RsyncFinished';
__consts_0.Window = window;
__consts_0.const_str__96 = '_txt_';
__consts_0.py____magic_assertion_AssertionError__112 = py____magic_assertion_AssertionError;
__consts_0.const_str__80 = 'stdout';
__consts_0.const_str = 'aa';
__consts_0.const_str__94 = 'error';
__consts_0.exceptions_KeyError_meta = new exceptions_KeyError_meta();
__consts_0.exceptions_KeyError = new exceptions_KeyError();
__consts_0.const_str__69 = 'FINISHED ';
__consts_0.const_tuple__35 = undefined;
__consts_0.const_str__42 = 'Rsyncing';
__consts_0.const_str__36 = 'info';
__consts_0.const_str__32 = 'hidden';
__consts_0.const_str__22 = 'true';
__consts_0.const_list = undefined;
__consts_0.exceptions_ValueError__110 = exceptions_ValueError;
__consts_0.const_tuple__33 = undefined;
__consts_0.const_tuple__95 = {};
__consts_0.const_str__92 = 'F';
__consts_0.const_str__29 = 'onmouseout';
__consts_0.const_str__47 = 'type';
__consts_0.const_str__105 = 'length';
__consts_0.const_str__89 = 'passed';
__consts_0.const_str__103 = '.';
__consts_0.const_str__53 = 'FailedTryiter';
__consts_0.py____magic_assertion_AssertionError_meta = new py____magic_assertion_AssertionError_meta();
__consts_0.py____magic_assertion_AssertionError = new py____magic_assertion_AssertionError();
__consts_0.const_str__25 = '#ff0000';
__consts_0.const_str__84 = 'Tests [crashed]';
__consts_0.const_str__20 = 'messagebox';
__consts_0.const_str__58 = 'fullitemname';
__consts_0.const_str__107 = 'table';
__consts_0.const_str__64 = 'href';
__consts_0.const_str__68 = 'skips';
__consts_0.const_str__57 = 'CrashedExecution';
__consts_0.const_str__19 = '\n';
__consts_0.const_list__120 = [];
__consts_0.const_str__38 = 'pre';
__consts_0.const_str__85 = 'Py.test [interrupted]';
__consts_0.const_str__17 = '\n======== Stdout: ========\n';
__consts_0.const_str__76 = '#00ff00';
__consts_0.const_tuple__23 = {};
__consts_0.const_str__37 = 'beige';
__consts_0.const_str__102 = 's';
__consts_0.exceptions_ValueError_meta = new exceptions_ValueError_meta();
__consts_0.const_str__79 = 'traceback';
__consts_0.const_str__45 = 'testmain';
__consts_0.const_str__101 = "javascript:show_skip('";
__consts_0.const_str__78 = '[';
__consts_0.const_str__10 = 'checked';
__consts_0.const_str__59 = 'reason';
__consts_0.exceptions_StopIteration__116 = exceptions_StopIteration;
__consts_0.exceptions_StopIteration_meta = new exceptions_StopIteration_meta();
__consts_0.const_str__63 = "javascript:show_traceback('";
__consts_0.const_str__41 = 'Tests';
__consts_0.py____test_rsession_webjs_Globals__121 = py____test_rsession_webjs_Globals;
__consts_0.py____test_rsession_webjs_Globals_meta = new py____test_rsession_webjs_Globals_meta();
__consts_0.const_str__66 = 'run';
__consts_0.const_str__54 = 'SkippedTryiter';
__consts_0.const_str__91 = 'None';
__consts_0.const_str__11 = 'True';
__consts_0.const_str__99 = '/';
__consts_0.const_str__75 = 'hostkey';
__consts_0.const_str__67 = 'fails';
__consts_0.const_str__48 = 'ItemStart';
__consts_0.const_str__104 = 'itemname';
__consts_0.const_str__52 = 'TestFinished';
__consts_0.const_str__2 = 'jobs';
__consts_0.const_str__18 = '\n========== Stderr: ==========\n';
__consts_0.const_str__12 = '';
__consts_0.py____test_rsession_webjs_Globals = new py____test_rsession_webjs_Globals();
__consts_0.exceptions_StopIteration = new exceptions_StopIteration();
__consts_0.const_str__81 = 'stderr';
__consts_0.const_str__73 = 'Py.test ';
__consts_0.exceptions_ValueError = new exceptions_ValueError();
__consts_0.const_str__7 = 'visible';
__consts_0.const_str__100 = 'False';
__consts_0.const_tuple__97 = {};
__consts_0.const_str__50 = 'HostRSyncRootReady';
__consts_0.const_str__28 = 'onmouseover';
__consts_0.const_str__65 = '- FAILED TO LOAD MODULE';
__consts_0.const_str__106 = '[0/';
__consts_0.py____test_rsession_webjs_Options = new py____test_rsession_webjs_Options();
__consts_0.const_str__49 = 'SendItem';
__consts_0.const_str__74 = 'fullmodulename';
__consts_0.const_str__90 = 'skipped';
__consts_0.const_str__24 = 'hostsbody';
__consts_0.const_str__77 = '[0]';
__consts_0.const_str__6 = 'td';
__consts_0.const_str__16 = '====== Traceback: =========\n';
__consts_0.const_str__5 = 'tr';
__consts_0.const_str__82 = 'item_name';
__consts_0.const_str__43 = 'Tests [';
__consts_0.Document = document;
__consts_0.const_tuple__98 = {};
__consts_0.const_str__56 = 'InterruptedExecution';
__consts_0.const_str__9 = 'opt_scroll';
__consts_0.py____test_rsession_webjs_Options_meta.class_ = __consts_0.py____test_rsession_webjs_Options__114;
__consts_0.exceptions_KeyError_meta.class_ = __consts_0.exceptions_KeyError__118;
__consts_0.exceptions_KeyError.meta = __consts_0.exceptions_KeyError_meta;
__consts_0.py____magic_assertion_AssertionError_meta.class_ = __consts_0.py____magic_assertion_AssertionError__112;
__consts_0.py____magic_assertion_AssertionError.meta = __consts_0.py____magic_assertion_AssertionError_meta;
__consts_0.exceptions_ValueError_meta.class_ = __consts_0.exceptions_ValueError__110;
__consts_0.exceptions_StopIteration_meta.class_ = __consts_0.exceptions_StopIteration__116;
__consts_0.py____test_rsession_webjs_Globals_meta.class_ = __consts_0.py____test_rsession_webjs_Globals__121;
__consts_0.py____test_rsession_webjs_Globals.odata_empty = true;
__consts_0.py____test_rsession_webjs_Globals.osessid = __consts_0.const_str__12;
__consts_0.py____test_rsession_webjs_Globals.ohost = __consts_0.const_str__12;
__consts_0.py____test_rsession_webjs_Globals.orsync_dots = 0;
__consts_0.py____test_rsession_webjs_Globals.ofinished = false;
__consts_0.py____test_rsession_webjs_Globals.ohost_dict = __consts_0.const_tuple__33;
__consts_0.py____test_rsession_webjs_Globals.meta = __consts_0.py____test_rsession_webjs_Globals_meta;
__consts_0.py____test_rsession_webjs_Globals.opending = __consts_0.const_list__120;
__consts_0.py____test_rsession_webjs_Globals.orsync_done = false;
__consts_0.py____test_rsession_webjs_Globals.ohost_pending = __consts_0.const_tuple__35;
__consts_0.exceptions_StopIteration.meta = __consts_0.exceptions_StopIteration_meta;
__consts_0.exceptions_ValueError.meta = __consts_0.exceptions_ValueError_meta;
__consts_0.py____test_rsession_webjs_Options.meta = __consts_0.py____test_rsession_webjs_Options_meta;
__consts_0.py____test_rsession_webjs_Options.oscroll = true;
