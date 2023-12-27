globalThis.process = {
    argv: [],
    env: {},
};
var Ja = Object.create;
var Te = Object.defineProperty;
var Ya = Object.getOwnPropertyDescriptor;
var Xa = Object.getOwnPropertyNames;
var Ka = Object.getPrototypeOf,
    Za = Object.prototype.hasOwnProperty;
var A = (e, t) => () => (e && (t = e((e = 0))), t);
var L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Z = (e, t) => {
        for (var a in t) Te(e, a, { get: t[a], enumerable: !0 });
    },
    Qa = (e, t, a, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
            for (let r of Xa(t))
                !Za.call(e, r) &&
                    r !== a &&
                    Te(e, r, {
                        get: () => t[r],
                        enumerable: !(n = Ya(t, r)) || n.enumerable,
                    });
        return e;
    };
var Q = (e, t, a) => (
    (a = e != null ? Ja(Ka(e)) : {}),
    Qa(
        t || !e || !e.__esModule
            ? Te(a, "default", { value: e, enumerable: !0 })
            : a,
        e,
    )
);
function de(e) {
    return e[0] === "/" ? e : "/" + e;
}
function Le(e) {
    return e.replace(/(?<!:)\/\/+/g, "/");
}
function me(e) {
    return e.endsWith("/") ? e.slice(0, e.length - 1) : e;
}
function ei(e) {
    return e.startsWith("/") ? e.substring(1) : e;
}
function Me(e) {
    return e.replace(/^\/|\/$/g, "");
}
function ti(e) {
    return typeof e == "string" || e instanceof String;
}
function H(...e) {
    return e
        .filter(ti)
        .map((t, a) => (a === 0 ? me(t) : a === e.length - 1 ? ei(t) : Me(t)))
        .join("/");
}
function U(e) {
    return /^(http|ftp|https|ws):?\/\//.test(e) || e.startsWith("data:");
}
function Ie(e) {
    return e.replace(/\\/g, "/");
}
var ee = A(() => {});
var Oe = L((_e) => {
    "use strict";
    _e.parse = ai;
    _e.serialize = ii;
    var ni = Object.prototype.toString,
        fe = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function ai(e, t) {
        if (typeof e != "string")
            throw new TypeError("argument str must be a string");
        for (
            var a = {}, n = t || {}, r = n.decode || ri, i = 0;
            i < e.length;

        ) {
            var o = e.indexOf("=", i);
            if (o === -1) break;
            var s = e.indexOf(";", i);
            if (s === -1) s = e.length;
            else if (s < o) {
                i = e.lastIndexOf(";", o - 1) + 1;
                continue;
            }
            var c = e.slice(i, o).trim();
            if (a[c] === void 0) {
                var l = e.slice(o + 1, s).trim();
                l.charCodeAt(0) === 34 && (l = l.slice(1, -1)),
                    (a[c] = ui(l, r));
            }
            i = s + 1;
        }
        return a;
    }
    function ii(e, t, a) {
        var n = a || {},
            r = n.encode || oi;
        if (typeof r != "function")
            throw new TypeError("option encode is invalid");
        if (!fe.test(e)) throw new TypeError("argument name is invalid");
        var i = r(t);
        if (i && !fe.test(i)) throw new TypeError("argument val is invalid");
        var o = e + "=" + i;
        if (n.maxAge != null) {
            var s = n.maxAge - 0;
            if (isNaN(s) || !isFinite(s))
                throw new TypeError("option maxAge is invalid");
            o += "; Max-Age=" + Math.floor(s);
        }
        if (n.domain) {
            if (!fe.test(n.domain))
                throw new TypeError("option domain is invalid");
            o += "; Domain=" + n.domain;
        }
        if (n.path) {
            if (!fe.test(n.path)) throw new TypeError("option path is invalid");
            o += "; Path=" + n.path;
        }
        if (n.expires) {
            var c = n.expires;
            if (!si(c) || isNaN(c.valueOf()))
                throw new TypeError("option expires is invalid");
            o += "; Expires=" + c.toUTCString();
        }
        if (
            (n.httpOnly && (o += "; HttpOnly"),
            n.secure && (o += "; Secure"),
            n.priority)
        ) {
            var l =
                typeof n.priority == "string"
                    ? n.priority.toLowerCase()
                    : n.priority;
            switch (l) {
                case "low":
                    o += "; Priority=Low";
                    break;
                case "medium":
                    o += "; Priority=Medium";
                    break;
                case "high":
                    o += "; Priority=High";
                    break;
                default:
                    throw new TypeError("option priority is invalid");
            }
        }
        if (n.sameSite) {
            var u =
                typeof n.sameSite == "string"
                    ? n.sameSite.toLowerCase()
                    : n.sameSite;
            switch (u) {
                case !0:
                    o += "; SameSite=Strict";
                    break;
                case "lax":
                    o += "; SameSite=Lax";
                    break;
                case "strict":
                    o += "; SameSite=Strict";
                    break;
                case "none":
                    o += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid");
            }
        }
        return o;
    }
    function ri(e) {
        return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
    }
    function oi(e) {
        return encodeURIComponent(e);
    }
    function si(e) {
        return ni.call(e) === "[object Date]" || e instanceof Date;
    }
    function ui(e, t) {
        try {
            return t(e);
        } catch {
            return e;
        }
    }
});
var sn = L((gs, Ue) => {
    var k = {};
    typeof Ue > "u" ? (window.eastasianwidth = k) : (Ue.exports = k);
    k.eastAsianWidth = function (e) {
        var t = e.charCodeAt(0),
            a = e.length == 2 ? e.charCodeAt(1) : 0,
            n = t;
        return (
            55296 <= t &&
                t <= 56319 &&
                56320 <= a &&
                a <= 57343 &&
                ((t &= 1023), (a &= 1023), (n = (t << 10) | a), (n += 65536)),
            n == 12288 ||
            (65281 <= n && n <= 65376) ||
            (65504 <= n && n <= 65510)
                ? "F"
                : n == 8361 ||
                  (65377 <= n && n <= 65470) ||
                  (65474 <= n && n <= 65479) ||
                  (65482 <= n && n <= 65487) ||
                  (65490 <= n && n <= 65495) ||
                  (65498 <= n && n <= 65500) ||
                  (65512 <= n && n <= 65518)
                ? "H"
                : (4352 <= n && n <= 4447) ||
                  (4515 <= n && n <= 4519) ||
                  (4602 <= n && n <= 4607) ||
                  (9001 <= n && n <= 9002) ||
                  (11904 <= n && n <= 11929) ||
                  (11931 <= n && n <= 12019) ||
                  (12032 <= n && n <= 12245) ||
                  (12272 <= n && n <= 12283) ||
                  (12289 <= n && n <= 12350) ||
                  (12353 <= n && n <= 12438) ||
                  (12441 <= n && n <= 12543) ||
                  (12549 <= n && n <= 12589) ||
                  (12593 <= n && n <= 12686) ||
                  (12688 <= n && n <= 12730) ||
                  (12736 <= n && n <= 12771) ||
                  (12784 <= n && n <= 12830) ||
                  (12832 <= n && n <= 12871) ||
                  (12880 <= n && n <= 13054) ||
                  (13056 <= n && n <= 19903) ||
                  (19968 <= n && n <= 42124) ||
                  (42128 <= n && n <= 42182) ||
                  (43360 <= n && n <= 43388) ||
                  (44032 <= n && n <= 55203) ||
                  (55216 <= n && n <= 55238) ||
                  (55243 <= n && n <= 55291) ||
                  (63744 <= n && n <= 64255) ||
                  (65040 <= n && n <= 65049) ||
                  (65072 <= n && n <= 65106) ||
                  (65108 <= n && n <= 65126) ||
                  (65128 <= n && n <= 65131) ||
                  (110592 <= n && n <= 110593) ||
                  (127488 <= n && n <= 127490) ||
                  (127504 <= n && n <= 127546) ||
                  (127552 <= n && n <= 127560) ||
                  (127568 <= n && n <= 127569) ||
                  (131072 <= n && n <= 194367) ||
                  (177984 <= n && n <= 196605) ||
                  (196608 <= n && n <= 262141)
                ? "W"
                : (32 <= n && n <= 126) ||
                  (162 <= n && n <= 163) ||
                  (165 <= n && n <= 166) ||
                  n == 172 ||
                  n == 175 ||
                  (10214 <= n && n <= 10221) ||
                  (10629 <= n && n <= 10630)
                ? "Na"
                : n == 161 ||
                  n == 164 ||
                  (167 <= n && n <= 168) ||
                  n == 170 ||
                  (173 <= n && n <= 174) ||
                  (176 <= n && n <= 180) ||
                  (182 <= n && n <= 186) ||
                  (188 <= n && n <= 191) ||
                  n == 198 ||
                  n == 208 ||
                  (215 <= n && n <= 216) ||
                  (222 <= n && n <= 225) ||
                  n == 230 ||
                  (232 <= n && n <= 234) ||
                  (236 <= n && n <= 237) ||
                  n == 240 ||
                  (242 <= n && n <= 243) ||
                  (247 <= n && n <= 250) ||
                  n == 252 ||
                  n == 254 ||
                  n == 257 ||
                  n == 273 ||
                  n == 275 ||
                  n == 283 ||
                  (294 <= n && n <= 295) ||
                  n == 299 ||
                  (305 <= n && n <= 307) ||
                  n == 312 ||
                  (319 <= n && n <= 322) ||
                  n == 324 ||
                  (328 <= n && n <= 331) ||
                  n == 333 ||
                  (338 <= n && n <= 339) ||
                  (358 <= n && n <= 359) ||
                  n == 363 ||
                  n == 462 ||
                  n == 464 ||
                  n == 466 ||
                  n == 468 ||
                  n == 470 ||
                  n == 472 ||
                  n == 474 ||
                  n == 476 ||
                  n == 593 ||
                  n == 609 ||
                  n == 708 ||
                  n == 711 ||
                  (713 <= n && n <= 715) ||
                  n == 717 ||
                  n == 720 ||
                  (728 <= n && n <= 731) ||
                  n == 733 ||
                  n == 735 ||
                  (768 <= n && n <= 879) ||
                  (913 <= n && n <= 929) ||
                  (931 <= n && n <= 937) ||
                  (945 <= n && n <= 961) ||
                  (963 <= n && n <= 969) ||
                  n == 1025 ||
                  (1040 <= n && n <= 1103) ||
                  n == 1105 ||
                  n == 8208 ||
                  (8211 <= n && n <= 8214) ||
                  (8216 <= n && n <= 8217) ||
                  (8220 <= n && n <= 8221) ||
                  (8224 <= n && n <= 8226) ||
                  (8228 <= n && n <= 8231) ||
                  n == 8240 ||
                  (8242 <= n && n <= 8243) ||
                  n == 8245 ||
                  n == 8251 ||
                  n == 8254 ||
                  n == 8308 ||
                  n == 8319 ||
                  (8321 <= n && n <= 8324) ||
                  n == 8364 ||
                  n == 8451 ||
                  n == 8453 ||
                  n == 8457 ||
                  n == 8467 ||
                  n == 8470 ||
                  (8481 <= n && n <= 8482) ||
                  n == 8486 ||
                  n == 8491 ||
                  (8531 <= n && n <= 8532) ||
                  (8539 <= n && n <= 8542) ||
                  (8544 <= n && n <= 8555) ||
                  (8560 <= n && n <= 8569) ||
                  n == 8585 ||
                  (8592 <= n && n <= 8601) ||
                  (8632 <= n && n <= 8633) ||
                  n == 8658 ||
                  n == 8660 ||
                  n == 8679 ||
                  n == 8704 ||
                  (8706 <= n && n <= 8707) ||
                  (8711 <= n && n <= 8712) ||
                  n == 8715 ||
                  n == 8719 ||
                  n == 8721 ||
                  n == 8725 ||
                  n == 8730 ||
                  (8733 <= n && n <= 8736) ||
                  n == 8739 ||
                  n == 8741 ||
                  (8743 <= n && n <= 8748) ||
                  n == 8750 ||
                  (8756 <= n && n <= 8759) ||
                  (8764 <= n && n <= 8765) ||
                  n == 8776 ||
                  n == 8780 ||
                  n == 8786 ||
                  (8800 <= n && n <= 8801) ||
                  (8804 <= n && n <= 8807) ||
                  (8810 <= n && n <= 8811) ||
                  (8814 <= n && n <= 8815) ||
                  (8834 <= n && n <= 8835) ||
                  (8838 <= n && n <= 8839) ||
                  n == 8853 ||
                  n == 8857 ||
                  n == 8869 ||
                  n == 8895 ||
                  n == 8978 ||
                  (9312 <= n && n <= 9449) ||
                  (9451 <= n && n <= 9547) ||
                  (9552 <= n && n <= 9587) ||
                  (9600 <= n && n <= 9615) ||
                  (9618 <= n && n <= 9621) ||
                  (9632 <= n && n <= 9633) ||
                  (9635 <= n && n <= 9641) ||
                  (9650 <= n && n <= 9651) ||
                  (9654 <= n && n <= 9655) ||
                  (9660 <= n && n <= 9661) ||
                  (9664 <= n && n <= 9665) ||
                  (9670 <= n && n <= 9672) ||
                  n == 9675 ||
                  (9678 <= n && n <= 9681) ||
                  (9698 <= n && n <= 9701) ||
                  n == 9711 ||
                  (9733 <= n && n <= 9734) ||
                  n == 9737 ||
                  (9742 <= n && n <= 9743) ||
                  (9748 <= n && n <= 9749) ||
                  n == 9756 ||
                  n == 9758 ||
                  n == 9792 ||
                  n == 9794 ||
                  (9824 <= n && n <= 9825) ||
                  (9827 <= n && n <= 9829) ||
                  (9831 <= n && n <= 9834) ||
                  (9836 <= n && n <= 9837) ||
                  n == 9839 ||
                  (9886 <= n && n <= 9887) ||
                  (9918 <= n && n <= 9919) ||
                  (9924 <= n && n <= 9933) ||
                  (9935 <= n && n <= 9953) ||
                  n == 9955 ||
                  (9960 <= n && n <= 9983) ||
                  n == 10045 ||
                  n == 10071 ||
                  (10102 <= n && n <= 10111) ||
                  (11093 <= n && n <= 11097) ||
                  (12872 <= n && n <= 12879) ||
                  (57344 <= n && n <= 63743) ||
                  (65024 <= n && n <= 65039) ||
                  n == 65533 ||
                  (127232 <= n && n <= 127242) ||
                  (127248 <= n && n <= 127277) ||
                  (127280 <= n && n <= 127337) ||
                  (127344 <= n && n <= 127386) ||
                  (917760 <= n && n <= 917999) ||
                  (983040 <= n && n <= 1048573) ||
                  (1048576 <= n && n <= 1114109)
                ? "A"
                : "N"
        );
    };
    k.characterLength = function (e) {
        var t = this.eastAsianWidth(e);
        return t == "F" || t == "W" || t == "A" ? 2 : 1;
    };
    function on(e) {
        return (
            e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []
        );
    }
    k.length = function (e) {
        for (var t = on(e), a = 0, n = 0; n < t.length; n++)
            a = a + this.characterLength(t[n]);
        return a;
    };
    k.slice = function (e, t, a) {
        (textLen = k.length(e)),
            (t = t || 0),
            (a = a || 1),
            t < 0 && (t = textLen + t),
            a < 0 && (a = textLen + a);
        for (var n = "", r = 0, i = on(e), o = 0; o < i.length; o++) {
            var s = i[o],
                c = k.length(s);
            if (r >= t - (c == 2 ? 1 : 0))
                if (r + c <= a) n += s;
                else break;
            r += c;
        }
        return n;
    };
});
var qe = L((Es, un) => {
    "use strict";
    function De() {
        (this._types = Object.create(null)),
            (this._extensions = Object.create(null));
        for (let e = 0; e < arguments.length; e++) this.define(arguments[e]);
        (this.define = this.define.bind(this)),
            (this.getType = this.getType.bind(this)),
            (this.getExtension = this.getExtension.bind(this));
    }
    De.prototype.define = function (e, t) {
        for (let a in e) {
            let n = e[a].map(function (r) {
                return r.toLowerCase();
            });
            a = a.toLowerCase();
            for (let r = 0; r < n.length; r++) {
                let i = n[r];
                if (i[0] !== "*") {
                    if (!t && i in this._types)
                        throw new Error(
                            'Attempt to change mapping for "' +
                                i +
                                '" extension from "' +
                                this._types[i] +
                                '" to "' +
                                a +
                                '". Pass `force=true` to allow this, otherwise remove "' +
                                i +
                                '" from the list of extensions for "' +
                                a +
                                '".',
                        );
                    this._types[i] = a;
                }
            }
            if (t || !this._extensions[a]) {
                let r = n[0];
                this._extensions[a] = r[0] !== "*" ? r : r.substr(1);
            }
        }
    };
    De.prototype.getType = function (e) {
        e = String(e);
        let t = e.replace(/^.*[/\\]/, "").toLowerCase(),
            a = t.replace(/^.*\./, "").toLowerCase(),
            n = t.length < e.length;
        return ((a.length < t.length - 1 || !n) && this._types[a]) || null;
    };
    De.prototype.getExtension = function (e) {
        return (
            (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1),
            (e && this._extensions[e.toLowerCase()]) || null
        );
    };
    un.exports = De;
});
var We = L((Cs, cn) => {
    cn.exports = {
        "application/andrew-inset": ["ez"],
        "application/applixware": ["aw"],
        "application/atom+xml": ["atom"],
        "application/atomcat+xml": ["atomcat"],
        "application/atomdeleted+xml": ["atomdeleted"],
        "application/atomsvc+xml": ["atomsvc"],
        "application/atsc-dwd+xml": ["dwd"],
        "application/atsc-held+xml": ["held"],
        "application/atsc-rsat+xml": ["rsat"],
        "application/bdoc": ["bdoc"],
        "application/calendar+xml": ["xcs"],
        "application/ccxml+xml": ["ccxml"],
        "application/cdfx+xml": ["cdfx"],
        "application/cdmi-capability": ["cdmia"],
        "application/cdmi-container": ["cdmic"],
        "application/cdmi-domain": ["cdmid"],
        "application/cdmi-object": ["cdmio"],
        "application/cdmi-queue": ["cdmiq"],
        "application/cu-seeme": ["cu"],
        "application/dash+xml": ["mpd"],
        "application/davmount+xml": ["davmount"],
        "application/docbook+xml": ["dbk"],
        "application/dssc+der": ["dssc"],
        "application/dssc+xml": ["xdssc"],
        "application/ecmascript": ["es", "ecma"],
        "application/emma+xml": ["emma"],
        "application/emotionml+xml": ["emotionml"],
        "application/epub+zip": ["epub"],
        "application/exi": ["exi"],
        "application/express": ["exp"],
        "application/fdt+xml": ["fdt"],
        "application/font-tdpfr": ["pfr"],
        "application/geo+json": ["geojson"],
        "application/gml+xml": ["gml"],
        "application/gpx+xml": ["gpx"],
        "application/gxf": ["gxf"],
        "application/gzip": ["gz"],
        "application/hjson": ["hjson"],
        "application/hyperstudio": ["stk"],
        "application/inkml+xml": ["ink", "inkml"],
        "application/ipfix": ["ipfix"],
        "application/its+xml": ["its"],
        "application/java-archive": ["jar", "war", "ear"],
        "application/java-serialized-object": ["ser"],
        "application/java-vm": ["class"],
        "application/javascript": ["js", "mjs"],
        "application/json": ["json", "map"],
        "application/json5": ["json5"],
        "application/jsonml+json": ["jsonml"],
        "application/ld+json": ["jsonld"],
        "application/lgr+xml": ["lgr"],
        "application/lost+xml": ["lostxml"],
        "application/mac-binhex40": ["hqx"],
        "application/mac-compactpro": ["cpt"],
        "application/mads+xml": ["mads"],
        "application/manifest+json": ["webmanifest"],
        "application/marc": ["mrc"],
        "application/marcxml+xml": ["mrcx"],
        "application/mathematica": ["ma", "nb", "mb"],
        "application/mathml+xml": ["mathml"],
        "application/mbox": ["mbox"],
        "application/mediaservercontrol+xml": ["mscml"],
        "application/metalink+xml": ["metalink"],
        "application/metalink4+xml": ["meta4"],
        "application/mets+xml": ["mets"],
        "application/mmt-aei+xml": ["maei"],
        "application/mmt-usd+xml": ["musd"],
        "application/mods+xml": ["mods"],
        "application/mp21": ["m21", "mp21"],
        "application/mp4": ["mp4s", "m4p"],
        "application/msword": ["doc", "dot"],
        "application/mxf": ["mxf"],
        "application/n-quads": ["nq"],
        "application/n-triples": ["nt"],
        "application/node": ["cjs"],
        "application/octet-stream": [
            "bin",
            "dms",
            "lrf",
            "mar",
            "so",
            "dist",
            "distz",
            "pkg",
            "bpk",
            "dump",
            "elc",
            "deploy",
            "exe",
            "dll",
            "deb",
            "dmg",
            "iso",
            "img",
            "msi",
            "msp",
            "msm",
            "buffer",
        ],
        "application/oda": ["oda"],
        "application/oebps-package+xml": ["opf"],
        "application/ogg": ["ogx"],
        "application/omdoc+xml": ["omdoc"],
        "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
        "application/oxps": ["oxps"],
        "application/p2p-overlay+xml": ["relo"],
        "application/patch-ops-error+xml": ["xer"],
        "application/pdf": ["pdf"],
        "application/pgp-encrypted": ["pgp"],
        "application/pgp-signature": ["asc", "sig"],
        "application/pics-rules": ["prf"],
        "application/pkcs10": ["p10"],
        "application/pkcs7-mime": ["p7m", "p7c"],
        "application/pkcs7-signature": ["p7s"],
        "application/pkcs8": ["p8"],
        "application/pkix-attr-cert": ["ac"],
        "application/pkix-cert": ["cer"],
        "application/pkix-crl": ["crl"],
        "application/pkix-pkipath": ["pkipath"],
        "application/pkixcmp": ["pki"],
        "application/pls+xml": ["pls"],
        "application/postscript": ["ai", "eps", "ps"],
        "application/provenance+xml": ["provx"],
        "application/pskc+xml": ["pskcxml"],
        "application/raml+yaml": ["raml"],
        "application/rdf+xml": ["rdf", "owl"],
        "application/reginfo+xml": ["rif"],
        "application/relax-ng-compact-syntax": ["rnc"],
        "application/resource-lists+xml": ["rl"],
        "application/resource-lists-diff+xml": ["rld"],
        "application/rls-services+xml": ["rs"],
        "application/route-apd+xml": ["rapd"],
        "application/route-s-tsid+xml": ["sls"],
        "application/route-usd+xml": ["rusd"],
        "application/rpki-ghostbusters": ["gbr"],
        "application/rpki-manifest": ["mft"],
        "application/rpki-roa": ["roa"],
        "application/rsd+xml": ["rsd"],
        "application/rss+xml": ["rss"],
        "application/rtf": ["rtf"],
        "application/sbml+xml": ["sbml"],
        "application/scvp-cv-request": ["scq"],
        "application/scvp-cv-response": ["scs"],
        "application/scvp-vp-request": ["spq"],
        "application/scvp-vp-response": ["spp"],
        "application/sdp": ["sdp"],
        "application/senml+xml": ["senmlx"],
        "application/sensml+xml": ["sensmlx"],
        "application/set-payment-initiation": ["setpay"],
        "application/set-registration-initiation": ["setreg"],
        "application/shf+xml": ["shf"],
        "application/sieve": ["siv", "sieve"],
        "application/smil+xml": ["smi", "smil"],
        "application/sparql-query": ["rq"],
        "application/sparql-results+xml": ["srx"],
        "application/srgs": ["gram"],
        "application/srgs+xml": ["grxml"],
        "application/sru+xml": ["sru"],
        "application/ssdl+xml": ["ssdl"],
        "application/ssml+xml": ["ssml"],
        "application/swid+xml": ["swidtag"],
        "application/tei+xml": ["tei", "teicorpus"],
        "application/thraud+xml": ["tfi"],
        "application/timestamped-data": ["tsd"],
        "application/toml": ["toml"],
        "application/trig": ["trig"],
        "application/ttml+xml": ["ttml"],
        "application/ubjson": ["ubj"],
        "application/urc-ressheet+xml": ["rsheet"],
        "application/urc-targetdesc+xml": ["td"],
        "application/voicexml+xml": ["vxml"],
        "application/wasm": ["wasm"],
        "application/widget": ["wgt"],
        "application/winhlp": ["hlp"],
        "application/wsdl+xml": ["wsdl"],
        "application/wspolicy+xml": ["wspolicy"],
        "application/xaml+xml": ["xaml"],
        "application/xcap-att+xml": ["xav"],
        "application/xcap-caps+xml": ["xca"],
        "application/xcap-diff+xml": ["xdf"],
        "application/xcap-el+xml": ["xel"],
        "application/xcap-ns+xml": ["xns"],
        "application/xenc+xml": ["xenc"],
        "application/xhtml+xml": ["xhtml", "xht"],
        "application/xliff+xml": ["xlf"],
        "application/xml": ["xml", "xsl", "xsd", "rng"],
        "application/xml-dtd": ["dtd"],
        "application/xop+xml": ["xop"],
        "application/xproc+xml": ["xpl"],
        "application/xslt+xml": ["*xsl", "xslt"],
        "application/xspf+xml": ["xspf"],
        "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
        "application/yang": ["yang"],
        "application/yin+xml": ["yin"],
        "application/zip": ["zip"],
        "audio/3gpp": ["*3gpp"],
        "audio/adpcm": ["adp"],
        "audio/amr": ["amr"],
        "audio/basic": ["au", "snd"],
        "audio/midi": ["mid", "midi", "kar", "rmi"],
        "audio/mobile-xmf": ["mxmf"],
        "audio/mp3": ["*mp3"],
        "audio/mp4": ["m4a", "mp4a"],
        "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
        "audio/ogg": ["oga", "ogg", "spx", "opus"],
        "audio/s3m": ["s3m"],
        "audio/silk": ["sil"],
        "audio/wav": ["wav"],
        "audio/wave": ["*wav"],
        "audio/webm": ["weba"],
        "audio/xm": ["xm"],
        "font/collection": ["ttc"],
        "font/otf": ["otf"],
        "font/ttf": ["ttf"],
        "font/woff": ["woff"],
        "font/woff2": ["woff2"],
        "image/aces": ["exr"],
        "image/apng": ["apng"],
        "image/avif": ["avif"],
        "image/bmp": ["bmp"],
        "image/cgm": ["cgm"],
        "image/dicom-rle": ["drle"],
        "image/emf": ["emf"],
        "image/fits": ["fits"],
        "image/g3fax": ["g3"],
        "image/gif": ["gif"],
        "image/heic": ["heic"],
        "image/heic-sequence": ["heics"],
        "image/heif": ["heif"],
        "image/heif-sequence": ["heifs"],
        "image/hej2k": ["hej2"],
        "image/hsj2": ["hsj2"],
        "image/ief": ["ief"],
        "image/jls": ["jls"],
        "image/jp2": ["jp2", "jpg2"],
        "image/jpeg": ["jpeg", "jpg", "jpe"],
        "image/jph": ["jph"],
        "image/jphc": ["jhc"],
        "image/jpm": ["jpm"],
        "image/jpx": ["jpx", "jpf"],
        "image/jxr": ["jxr"],
        "image/jxra": ["jxra"],
        "image/jxrs": ["jxrs"],
        "image/jxs": ["jxs"],
        "image/jxsc": ["jxsc"],
        "image/jxsi": ["jxsi"],
        "image/jxss": ["jxss"],
        "image/ktx": ["ktx"],
        "image/ktx2": ["ktx2"],
        "image/png": ["png"],
        "image/sgi": ["sgi"],
        "image/svg+xml": ["svg", "svgz"],
        "image/t38": ["t38"],
        "image/tiff": ["tif", "tiff"],
        "image/tiff-fx": ["tfx"],
        "image/webp": ["webp"],
        "image/wmf": ["wmf"],
        "message/disposition-notification": ["disposition-notification"],
        "message/global": ["u8msg"],
        "message/global-delivery-status": ["u8dsn"],
        "message/global-disposition-notification": ["u8mdn"],
        "message/global-headers": ["u8hdr"],
        "message/rfc822": ["eml", "mime"],
        "model/3mf": ["3mf"],
        "model/gltf+json": ["gltf"],
        "model/gltf-binary": ["glb"],
        "model/iges": ["igs", "iges"],
        "model/mesh": ["msh", "mesh", "silo"],
        "model/mtl": ["mtl"],
        "model/obj": ["obj"],
        "model/step+xml": ["stpx"],
        "model/step+zip": ["stpz"],
        "model/step-xml+zip": ["stpxz"],
        "model/stl": ["stl"],
        "model/vrml": ["wrl", "vrml"],
        "model/x3d+binary": ["*x3db", "x3dbz"],
        "model/x3d+fastinfoset": ["x3db"],
        "model/x3d+vrml": ["*x3dv", "x3dvz"],
        "model/x3d+xml": ["x3d", "x3dz"],
        "model/x3d-vrml": ["x3dv"],
        "text/cache-manifest": ["appcache", "manifest"],
        "text/calendar": ["ics", "ifb"],
        "text/coffeescript": ["coffee", "litcoffee"],
        "text/css": ["css"],
        "text/csv": ["csv"],
        "text/html": ["html", "htm", "shtml"],
        "text/jade": ["jade"],
        "text/jsx": ["jsx"],
        "text/less": ["less"],
        "text/markdown": ["markdown", "md"],
        "text/mathml": ["mml"],
        "text/mdx": ["mdx"],
        "text/n3": ["n3"],
        "text/plain": [
            "txt",
            "text",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "ini",
        ],
        "text/richtext": ["rtx"],
        "text/rtf": ["*rtf"],
        "text/sgml": ["sgml", "sgm"],
        "text/shex": ["shex"],
        "text/slim": ["slim", "slm"],
        "text/spdx": ["spdx"],
        "text/stylus": ["stylus", "styl"],
        "text/tab-separated-values": ["tsv"],
        "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
        "text/turtle": ["ttl"],
        "text/uri-list": ["uri", "uris", "urls"],
        "text/vcard": ["vcard"],
        "text/vtt": ["vtt"],
        "text/xml": ["*xml"],
        "text/yaml": ["yaml", "yml"],
        "video/3gpp": ["3gp", "3gpp"],
        "video/3gpp2": ["3g2"],
        "video/h261": ["h261"],
        "video/h263": ["h263"],
        "video/h264": ["h264"],
        "video/iso.segment": ["m4s"],
        "video/jpeg": ["jpgv"],
        "video/jpm": ["*jpm", "jpgm"],
        "video/mj2": ["mj2", "mjp2"],
        "video/mp2t": ["ts"],
        "video/mp4": ["mp4", "mp4v", "mpg4"],
        "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
        "video/ogg": ["ogv"],
        "video/quicktime": ["qt", "mov"],
        "video/webm": ["webm"],
    };
});
var pn = L((As, ln) => {
    ln.exports = {
        "application/prs.cww": ["cww"],
        "application/vnd.1000minds.decision-model+xml": ["1km"],
        "application/vnd.3gpp.pic-bw-large": ["plb"],
        "application/vnd.3gpp.pic-bw-small": ["psb"],
        "application/vnd.3gpp.pic-bw-var": ["pvb"],
        "application/vnd.3gpp2.tcap": ["tcap"],
        "application/vnd.3m.post-it-notes": ["pwn"],
        "application/vnd.accpac.simply.aso": ["aso"],
        "application/vnd.accpac.simply.imp": ["imp"],
        "application/vnd.acucobol": ["acu"],
        "application/vnd.acucorp": ["atc", "acutc"],
        "application/vnd.adobe.air-application-installer-package+zip": ["air"],
        "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
        "application/vnd.adobe.fxp": ["fxp", "fxpl"],
        "application/vnd.adobe.xdp+xml": ["xdp"],
        "application/vnd.adobe.xfdf": ["xfdf"],
        "application/vnd.ahead.space": ["ahead"],
        "application/vnd.airzip.filesecure.azf": ["azf"],
        "application/vnd.airzip.filesecure.azs": ["azs"],
        "application/vnd.amazon.ebook": ["azw"],
        "application/vnd.americandynamics.acc": ["acc"],
        "application/vnd.amiga.ami": ["ami"],
        "application/vnd.android.package-archive": ["apk"],
        "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
        "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
        "application/vnd.antix.game-component": ["atx"],
        "application/vnd.apple.installer+xml": ["mpkg"],
        "application/vnd.apple.keynote": ["key"],
        "application/vnd.apple.mpegurl": ["m3u8"],
        "application/vnd.apple.numbers": ["numbers"],
        "application/vnd.apple.pages": ["pages"],
        "application/vnd.apple.pkpass": ["pkpass"],
        "application/vnd.aristanetworks.swi": ["swi"],
        "application/vnd.astraea-software.iota": ["iota"],
        "application/vnd.audiograph": ["aep"],
        "application/vnd.balsamiq.bmml+xml": ["bmml"],
        "application/vnd.blueice.multipass": ["mpm"],
        "application/vnd.bmi": ["bmi"],
        "application/vnd.businessobjects": ["rep"],
        "application/vnd.chemdraw+xml": ["cdxml"],
        "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
        "application/vnd.cinderella": ["cdy"],
        "application/vnd.citationstyles.style+xml": ["csl"],
        "application/vnd.claymore": ["cla"],
        "application/vnd.cloanto.rp9": ["rp9"],
        "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
        "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
        "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
        "application/vnd.commonspace": ["csp"],
        "application/vnd.contact.cmsg": ["cdbcmsg"],
        "application/vnd.cosmocaller": ["cmc"],
        "application/vnd.crick.clicker": ["clkx"],
        "application/vnd.crick.clicker.keyboard": ["clkk"],
        "application/vnd.crick.clicker.palette": ["clkp"],
        "application/vnd.crick.clicker.template": ["clkt"],
        "application/vnd.crick.clicker.wordbank": ["clkw"],
        "application/vnd.criticaltools.wbs+xml": ["wbs"],
        "application/vnd.ctc-posml": ["pml"],
        "application/vnd.cups-ppd": ["ppd"],
        "application/vnd.curl.car": ["car"],
        "application/vnd.curl.pcurl": ["pcurl"],
        "application/vnd.dart": ["dart"],
        "application/vnd.data-vision.rdz": ["rdz"],
        "application/vnd.dbf": ["dbf"],
        "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
        "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
        "application/vnd.dece.unspecified": ["uvx", "uvvx"],
        "application/vnd.dece.zip": ["uvz", "uvvz"],
        "application/vnd.denovo.fcselayout-link": ["fe_launch"],
        "application/vnd.dna": ["dna"],
        "application/vnd.dolby.mlp": ["mlp"],
        "application/vnd.dpgraph": ["dpg"],
        "application/vnd.dreamfactory": ["dfac"],
        "application/vnd.ds-keypoint": ["kpxx"],
        "application/vnd.dvb.ait": ["ait"],
        "application/vnd.dvb.service": ["svc"],
        "application/vnd.dynageo": ["geo"],
        "application/vnd.ecowin.chart": ["mag"],
        "application/vnd.enliven": ["nml"],
        "application/vnd.epson.esf": ["esf"],
        "application/vnd.epson.msf": ["msf"],
        "application/vnd.epson.quickanime": ["qam"],
        "application/vnd.epson.salt": ["slt"],
        "application/vnd.epson.ssf": ["ssf"],
        "application/vnd.eszigno3+xml": ["es3", "et3"],
        "application/vnd.ezpix-album": ["ez2"],
        "application/vnd.ezpix-package": ["ez3"],
        "application/vnd.fdf": ["fdf"],
        "application/vnd.fdsn.mseed": ["mseed"],
        "application/vnd.fdsn.seed": ["seed", "dataless"],
        "application/vnd.flographit": ["gph"],
        "application/vnd.fluxtime.clip": ["ftc"],
        "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
        "application/vnd.frogans.fnc": ["fnc"],
        "application/vnd.frogans.ltf": ["ltf"],
        "application/vnd.fsc.weblaunch": ["fsc"],
        "application/vnd.fujitsu.oasys": ["oas"],
        "application/vnd.fujitsu.oasys2": ["oa2"],
        "application/vnd.fujitsu.oasys3": ["oa3"],
        "application/vnd.fujitsu.oasysgp": ["fg5"],
        "application/vnd.fujitsu.oasysprs": ["bh2"],
        "application/vnd.fujixerox.ddd": ["ddd"],
        "application/vnd.fujixerox.docuworks": ["xdw"],
        "application/vnd.fujixerox.docuworks.binder": ["xbd"],
        "application/vnd.fuzzysheet": ["fzs"],
        "application/vnd.genomatix.tuxedo": ["txd"],
        "application/vnd.geogebra.file": ["ggb"],
        "application/vnd.geogebra.tool": ["ggt"],
        "application/vnd.geometry-explorer": ["gex", "gre"],
        "application/vnd.geonext": ["gxt"],
        "application/vnd.geoplan": ["g2w"],
        "application/vnd.geospace": ["g3w"],
        "application/vnd.gmx": ["gmx"],
        "application/vnd.google-apps.document": ["gdoc"],
        "application/vnd.google-apps.presentation": ["gslides"],
        "application/vnd.google-apps.spreadsheet": ["gsheet"],
        "application/vnd.google-earth.kml+xml": ["kml"],
        "application/vnd.google-earth.kmz": ["kmz"],
        "application/vnd.grafeq": ["gqf", "gqs"],
        "application/vnd.groove-account": ["gac"],
        "application/vnd.groove-help": ["ghf"],
        "application/vnd.groove-identity-message": ["gim"],
        "application/vnd.groove-injector": ["grv"],
        "application/vnd.groove-tool-message": ["gtm"],
        "application/vnd.groove-tool-template": ["tpl"],
        "application/vnd.groove-vcard": ["vcg"],
        "application/vnd.hal+xml": ["hal"],
        "application/vnd.handheld-entertainment+xml": ["zmm"],
        "application/vnd.hbci": ["hbci"],
        "application/vnd.hhe.lesson-player": ["les"],
        "application/vnd.hp-hpgl": ["hpgl"],
        "application/vnd.hp-hpid": ["hpid"],
        "application/vnd.hp-hps": ["hps"],
        "application/vnd.hp-jlyt": ["jlt"],
        "application/vnd.hp-pcl": ["pcl"],
        "application/vnd.hp-pclxl": ["pclxl"],
        "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
        "application/vnd.ibm.minipay": ["mpy"],
        "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
        "application/vnd.ibm.rights-management": ["irm"],
        "application/vnd.ibm.secure-container": ["sc"],
        "application/vnd.iccprofile": ["icc", "icm"],
        "application/vnd.igloader": ["igl"],
        "application/vnd.immervision-ivp": ["ivp"],
        "application/vnd.immervision-ivu": ["ivu"],
        "application/vnd.insors.igm": ["igm"],
        "application/vnd.intercon.formnet": ["xpw", "xpx"],
        "application/vnd.intergeo": ["i2g"],
        "application/vnd.intu.qbo": ["qbo"],
        "application/vnd.intu.qfx": ["qfx"],
        "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
        "application/vnd.irepository.package+xml": ["irp"],
        "application/vnd.is-xpr": ["xpr"],
        "application/vnd.isac.fcs": ["fcs"],
        "application/vnd.jam": ["jam"],
        "application/vnd.jcp.javame.midlet-rms": ["rms"],
        "application/vnd.jisp": ["jisp"],
        "application/vnd.joost.joda-archive": ["joda"],
        "application/vnd.kahootz": ["ktz", "ktr"],
        "application/vnd.kde.karbon": ["karbon"],
        "application/vnd.kde.kchart": ["chrt"],
        "application/vnd.kde.kformula": ["kfo"],
        "application/vnd.kde.kivio": ["flw"],
        "application/vnd.kde.kontour": ["kon"],
        "application/vnd.kde.kpresenter": ["kpr", "kpt"],
        "application/vnd.kde.kspread": ["ksp"],
        "application/vnd.kde.kword": ["kwd", "kwt"],
        "application/vnd.kenameaapp": ["htke"],
        "application/vnd.kidspiration": ["kia"],
        "application/vnd.kinar": ["kne", "knp"],
        "application/vnd.koan": ["skp", "skd", "skt", "skm"],
        "application/vnd.kodak-descriptor": ["sse"],
        "application/vnd.las.las+xml": ["lasxml"],
        "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
        "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
        "application/vnd.lotus-1-2-3": ["123"],
        "application/vnd.lotus-approach": ["apr"],
        "application/vnd.lotus-freelance": ["pre"],
        "application/vnd.lotus-notes": ["nsf"],
        "application/vnd.lotus-organizer": ["org"],
        "application/vnd.lotus-screencam": ["scm"],
        "application/vnd.lotus-wordpro": ["lwp"],
        "application/vnd.macports.portpkg": ["portpkg"],
        "application/vnd.mapbox-vector-tile": ["mvt"],
        "application/vnd.mcd": ["mcd"],
        "application/vnd.medcalcdata": ["mc1"],
        "application/vnd.mediastation.cdkey": ["cdkey"],
        "application/vnd.mfer": ["mwf"],
        "application/vnd.mfmp": ["mfm"],
        "application/vnd.micrografx.flo": ["flo"],
        "application/vnd.micrografx.igx": ["igx"],
        "application/vnd.mif": ["mif"],
        "application/vnd.mobius.daf": ["daf"],
        "application/vnd.mobius.dis": ["dis"],
        "application/vnd.mobius.mbk": ["mbk"],
        "application/vnd.mobius.mqy": ["mqy"],
        "application/vnd.mobius.msl": ["msl"],
        "application/vnd.mobius.plc": ["plc"],
        "application/vnd.mobius.txf": ["txf"],
        "application/vnd.mophun.application": ["mpn"],
        "application/vnd.mophun.certificate": ["mpc"],
        "application/vnd.mozilla.xul+xml": ["xul"],
        "application/vnd.ms-artgalry": ["cil"],
        "application/vnd.ms-cab-compressed": ["cab"],
        "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
        "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
        "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
        "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
        "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
        "application/vnd.ms-fontobject": ["eot"],
        "application/vnd.ms-htmlhelp": ["chm"],
        "application/vnd.ms-ims": ["ims"],
        "application/vnd.ms-lrm": ["lrm"],
        "application/vnd.ms-officetheme": ["thmx"],
        "application/vnd.ms-outlook": ["msg"],
        "application/vnd.ms-pki.seccat": ["cat"],
        "application/vnd.ms-pki.stl": ["*stl"],
        "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
        "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
        "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
        "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
        "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
        "application/vnd.ms-project": ["mpp", "mpt"],
        "application/vnd.ms-word.document.macroenabled.12": ["docm"],
        "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
        "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
        "application/vnd.ms-wpl": ["wpl"],
        "application/vnd.ms-xpsdocument": ["xps"],
        "application/vnd.mseq": ["mseq"],
        "application/vnd.musician": ["mus"],
        "application/vnd.muvee.style": ["msty"],
        "application/vnd.mynfc": ["taglet"],
        "application/vnd.neurolanguage.nlu": ["nlu"],
        "application/vnd.nitf": ["ntf", "nitf"],
        "application/vnd.noblenet-directory": ["nnd"],
        "application/vnd.noblenet-sealer": ["nns"],
        "application/vnd.noblenet-web": ["nnw"],
        "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
        "application/vnd.nokia.n-gage.data": ["ngdat"],
        "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
        "application/vnd.nokia.radio-preset": ["rpst"],
        "application/vnd.nokia.radio-presets": ["rpss"],
        "application/vnd.novadigm.edm": ["edm"],
        "application/vnd.novadigm.edx": ["edx"],
        "application/vnd.novadigm.ext": ["ext"],
        "application/vnd.oasis.opendocument.chart": ["odc"],
        "application/vnd.oasis.opendocument.chart-template": ["otc"],
        "application/vnd.oasis.opendocument.database": ["odb"],
        "application/vnd.oasis.opendocument.formula": ["odf"],
        "application/vnd.oasis.opendocument.formula-template": ["odft"],
        "application/vnd.oasis.opendocument.graphics": ["odg"],
        "application/vnd.oasis.opendocument.graphics-template": ["otg"],
        "application/vnd.oasis.opendocument.image": ["odi"],
        "application/vnd.oasis.opendocument.image-template": ["oti"],
        "application/vnd.oasis.opendocument.presentation": ["odp"],
        "application/vnd.oasis.opendocument.presentation-template": ["otp"],
        "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
        "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
        "application/vnd.oasis.opendocument.text": ["odt"],
        "application/vnd.oasis.opendocument.text-master": ["odm"],
        "application/vnd.oasis.opendocument.text-template": ["ott"],
        "application/vnd.oasis.opendocument.text-web": ["oth"],
        "application/vnd.olpc-sugar": ["xo"],
        "application/vnd.oma.dd2+xml": ["dd2"],
        "application/vnd.openblox.game+xml": ["obgx"],
        "application/vnd.openofficeorg.extension": ["oxt"],
        "application/vnd.openstreetmap.data+xml": ["osm"],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            ["pptx"],
        "application/vnd.openxmlformats-officedocument.presentationml.slide": [
            "sldx",
        ],
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
            ["ppsx"],
        "application/vnd.openxmlformats-officedocument.presentationml.template":
            ["potx"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
            "xlsx",
        ],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
            ["xltx"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            ["docx"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
            ["dotx"],
        "application/vnd.osgeo.mapguide.package": ["mgp"],
        "application/vnd.osgi.dp": ["dp"],
        "application/vnd.osgi.subsystem": ["esa"],
        "application/vnd.palm": ["pdb", "pqa", "oprc"],
        "application/vnd.pawaafile": ["paw"],
        "application/vnd.pg.format": ["str"],
        "application/vnd.pg.osasli": ["ei6"],
        "application/vnd.picsel": ["efif"],
        "application/vnd.pmi.widget": ["wg"],
        "application/vnd.pocketlearn": ["plf"],
        "application/vnd.powerbuilder6": ["pbd"],
        "application/vnd.previewsystems.box": ["box"],
        "application/vnd.proteus.magazine": ["mgz"],
        "application/vnd.publishare-delta-tree": ["qps"],
        "application/vnd.pvi.ptid1": ["ptid"],
        "application/vnd.quark.quarkxpress": [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb",
        ],
        "application/vnd.rar": ["rar"],
        "application/vnd.realvnc.bed": ["bed"],
        "application/vnd.recordare.musicxml": ["mxl"],
        "application/vnd.recordare.musicxml+xml": ["musicxml"],
        "application/vnd.rig.cryptonote": ["cryptonote"],
        "application/vnd.rim.cod": ["cod"],
        "application/vnd.rn-realmedia": ["rm"],
        "application/vnd.rn-realmedia-vbr": ["rmvb"],
        "application/vnd.route66.link66+xml": ["link66"],
        "application/vnd.sailingtracker.track": ["st"],
        "application/vnd.seemail": ["see"],
        "application/vnd.sema": ["sema"],
        "application/vnd.semd": ["semd"],
        "application/vnd.semf": ["semf"],
        "application/vnd.shana.informed.formdata": ["ifm"],
        "application/vnd.shana.informed.formtemplate": ["itp"],
        "application/vnd.shana.informed.interchange": ["iif"],
        "application/vnd.shana.informed.package": ["ipk"],
        "application/vnd.simtech-mindmapper": ["twd", "twds"],
        "application/vnd.smaf": ["mmf"],
        "application/vnd.smart.teacher": ["teacher"],
        "application/vnd.software602.filler.form+xml": ["fo"],
        "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
        "application/vnd.spotfire.dxp": ["dxp"],
        "application/vnd.spotfire.sfs": ["sfs"],
        "application/vnd.stardivision.calc": ["sdc"],
        "application/vnd.stardivision.draw": ["sda"],
        "application/vnd.stardivision.impress": ["sdd"],
        "application/vnd.stardivision.math": ["smf"],
        "application/vnd.stardivision.writer": ["sdw", "vor"],
        "application/vnd.stardivision.writer-global": ["sgl"],
        "application/vnd.stepmania.package": ["smzip"],
        "application/vnd.stepmania.stepchart": ["sm"],
        "application/vnd.sun.wadl+xml": ["wadl"],
        "application/vnd.sun.xml.calc": ["sxc"],
        "application/vnd.sun.xml.calc.template": ["stc"],
        "application/vnd.sun.xml.draw": ["sxd"],
        "application/vnd.sun.xml.draw.template": ["std"],
        "application/vnd.sun.xml.impress": ["sxi"],
        "application/vnd.sun.xml.impress.template": ["sti"],
        "application/vnd.sun.xml.math": ["sxm"],
        "application/vnd.sun.xml.writer": ["sxw"],
        "application/vnd.sun.xml.writer.global": ["sxg"],
        "application/vnd.sun.xml.writer.template": ["stw"],
        "application/vnd.sus-calendar": ["sus", "susp"],
        "application/vnd.svd": ["svd"],
        "application/vnd.symbian.install": ["sis", "sisx"],
        "application/vnd.syncml+xml": ["xsm"],
        "application/vnd.syncml.dm+wbxml": ["bdm"],
        "application/vnd.syncml.dm+xml": ["xdm"],
        "application/vnd.syncml.dmddf+xml": ["ddf"],
        "application/vnd.tao.intent-module-archive": ["tao"],
        "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
        "application/vnd.tmobile-livetv": ["tmo"],
        "application/vnd.trid.tpt": ["tpt"],
        "application/vnd.triscape.mxs": ["mxs"],
        "application/vnd.trueapp": ["tra"],
        "application/vnd.ufdl": ["ufd", "ufdl"],
        "application/vnd.uiq.theme": ["utz"],
        "application/vnd.umajin": ["umj"],
        "application/vnd.unity": ["unityweb"],
        "application/vnd.uoml+xml": ["uoml"],
        "application/vnd.vcx": ["vcx"],
        "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
        "application/vnd.visionary": ["vis"],
        "application/vnd.vsf": ["vsf"],
        "application/vnd.wap.wbxml": ["wbxml"],
        "application/vnd.wap.wmlc": ["wmlc"],
        "application/vnd.wap.wmlscriptc": ["wmlsc"],
        "application/vnd.webturbo": ["wtb"],
        "application/vnd.wolfram.player": ["nbp"],
        "application/vnd.wordperfect": ["wpd"],
        "application/vnd.wqd": ["wqd"],
        "application/vnd.wt.stf": ["stf"],
        "application/vnd.xara": ["xar"],
        "application/vnd.xfdl": ["xfdl"],
        "application/vnd.yamaha.hv-dic": ["hvd"],
        "application/vnd.yamaha.hv-script": ["hvs"],
        "application/vnd.yamaha.hv-voice": ["hvp"],
        "application/vnd.yamaha.openscoreformat": ["osf"],
        "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
        "application/vnd.yamaha.smaf-audio": ["saf"],
        "application/vnd.yamaha.smaf-phrase": ["spf"],
        "application/vnd.yellowriver-custom-menu": ["cmp"],
        "application/vnd.zul": ["zir", "zirz"],
        "application/vnd.zzazz.deck+xml": ["zaz"],
        "application/x-7z-compressed": ["7z"],
        "application/x-abiword": ["abw"],
        "application/x-ace-compressed": ["ace"],
        "application/x-apple-diskimage": ["*dmg"],
        "application/x-arj": ["arj"],
        "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
        "application/x-authorware-map": ["aam"],
        "application/x-authorware-seg": ["aas"],
        "application/x-bcpio": ["bcpio"],
        "application/x-bdoc": ["*bdoc"],
        "application/x-bittorrent": ["torrent"],
        "application/x-blorb": ["blb", "blorb"],
        "application/x-bzip": ["bz"],
        "application/x-bzip2": ["bz2", "boz"],
        "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
        "application/x-cdlink": ["vcd"],
        "application/x-cfs-compressed": ["cfs"],
        "application/x-chat": ["chat"],
        "application/x-chess-pgn": ["pgn"],
        "application/x-chrome-extension": ["crx"],
        "application/x-cocoa": ["cco"],
        "application/x-conference": ["nsc"],
        "application/x-cpio": ["cpio"],
        "application/x-csh": ["csh"],
        "application/x-debian-package": ["*deb", "udeb"],
        "application/x-dgc-compressed": ["dgc"],
        "application/x-director": [
            "dir",
            "dcr",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa",
        ],
        "application/x-doom": ["wad"],
        "application/x-dtbncx+xml": ["ncx"],
        "application/x-dtbook+xml": ["dtb"],
        "application/x-dtbresource+xml": ["res"],
        "application/x-dvi": ["dvi"],
        "application/x-envoy": ["evy"],
        "application/x-eva": ["eva"],
        "application/x-font-bdf": ["bdf"],
        "application/x-font-ghostscript": ["gsf"],
        "application/x-font-linux-psf": ["psf"],
        "application/x-font-pcf": ["pcf"],
        "application/x-font-snf": ["snf"],
        "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
        "application/x-freearc": ["arc"],
        "application/x-futuresplash": ["spl"],
        "application/x-gca-compressed": ["gca"],
        "application/x-glulx": ["ulx"],
        "application/x-gnumeric": ["gnumeric"],
        "application/x-gramps-xml": ["gramps"],
        "application/x-gtar": ["gtar"],
        "application/x-hdf": ["hdf"],
        "application/x-httpd-php": ["php"],
        "application/x-install-instructions": ["install"],
        "application/x-iso9660-image": ["*iso"],
        "application/x-iwork-keynote-sffkey": ["*key"],
        "application/x-iwork-numbers-sffnumbers": ["*numbers"],
        "application/x-iwork-pages-sffpages": ["*pages"],
        "application/x-java-archive-diff": ["jardiff"],
        "application/x-java-jnlp-file": ["jnlp"],
        "application/x-keepass2": ["kdbx"],
        "application/x-latex": ["latex"],
        "application/x-lua-bytecode": ["luac"],
        "application/x-lzh-compressed": ["lzh", "lha"],
        "application/x-makeself": ["run"],
        "application/x-mie": ["mie"],
        "application/x-mobipocket-ebook": ["prc", "mobi"],
        "application/x-ms-application": ["application"],
        "application/x-ms-shortcut": ["lnk"],
        "application/x-ms-wmd": ["wmd"],
        "application/x-ms-wmz": ["wmz"],
        "application/x-ms-xbap": ["xbap"],
        "application/x-msaccess": ["mdb"],
        "application/x-msbinder": ["obd"],
        "application/x-mscardfile": ["crd"],
        "application/x-msclip": ["clp"],
        "application/x-msdos-program": ["*exe"],
        "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
        "application/x-msmediaview": ["mvb", "m13", "m14"],
        "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
        "application/x-msmoney": ["mny"],
        "application/x-mspublisher": ["pub"],
        "application/x-msschedule": ["scd"],
        "application/x-msterminal": ["trm"],
        "application/x-mswrite": ["wri"],
        "application/x-netcdf": ["nc", "cdf"],
        "application/x-ns-proxy-autoconfig": ["pac"],
        "application/x-nzb": ["nzb"],
        "application/x-perl": ["pl", "pm"],
        "application/x-pilot": ["*prc", "*pdb"],
        "application/x-pkcs12": ["p12", "pfx"],
        "application/x-pkcs7-certificates": ["p7b", "spc"],
        "application/x-pkcs7-certreqresp": ["p7r"],
        "application/x-rar-compressed": ["*rar"],
        "application/x-redhat-package-manager": ["rpm"],
        "application/x-research-info-systems": ["ris"],
        "application/x-sea": ["sea"],
        "application/x-sh": ["sh"],
        "application/x-shar": ["shar"],
        "application/x-shockwave-flash": ["swf"],
        "application/x-silverlight-app": ["xap"],
        "application/x-sql": ["sql"],
        "application/x-stuffit": ["sit"],
        "application/x-stuffitx": ["sitx"],
        "application/x-subrip": ["srt"],
        "application/x-sv4cpio": ["sv4cpio"],
        "application/x-sv4crc": ["sv4crc"],
        "application/x-t3vm-image": ["t3"],
        "application/x-tads": ["gam"],
        "application/x-tar": ["tar"],
        "application/x-tcl": ["tcl", "tk"],
        "application/x-tex": ["tex"],
        "application/x-tex-tfm": ["tfm"],
        "application/x-texinfo": ["texinfo", "texi"],
        "application/x-tgif": ["*obj"],
        "application/x-ustar": ["ustar"],
        "application/x-virtualbox-hdd": ["hdd"],
        "application/x-virtualbox-ova": ["ova"],
        "application/x-virtualbox-ovf": ["ovf"],
        "application/x-virtualbox-vbox": ["vbox"],
        "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
        "application/x-virtualbox-vdi": ["vdi"],
        "application/x-virtualbox-vhd": ["vhd"],
        "application/x-virtualbox-vmdk": ["vmdk"],
        "application/x-wais-source": ["src"],
        "application/x-web-app-manifest+json": ["webapp"],
        "application/x-x509-ca-cert": ["der", "crt", "pem"],
        "application/x-xfig": ["fig"],
        "application/x-xliff+xml": ["*xlf"],
        "application/x-xpinstall": ["xpi"],
        "application/x-xz": ["xz"],
        "application/x-zmachine": [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8",
        ],
        "audio/vnd.dece.audio": ["uva", "uvva"],
        "audio/vnd.digital-winds": ["eol"],
        "audio/vnd.dra": ["dra"],
        "audio/vnd.dts": ["dts"],
        "audio/vnd.dts.hd": ["dtshd"],
        "audio/vnd.lucent.voice": ["lvp"],
        "audio/vnd.ms-playready.media.pya": ["pya"],
        "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
        "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
        "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
        "audio/vnd.rip": ["rip"],
        "audio/x-aac": ["aac"],
        "audio/x-aiff": ["aif", "aiff", "aifc"],
        "audio/x-caf": ["caf"],
        "audio/x-flac": ["flac"],
        "audio/x-m4a": ["*m4a"],
        "audio/x-matroska": ["mka"],
        "audio/x-mpegurl": ["m3u"],
        "audio/x-ms-wax": ["wax"],
        "audio/x-ms-wma": ["wma"],
        "audio/x-pn-realaudio": ["ram", "ra"],
        "audio/x-pn-realaudio-plugin": ["rmp"],
        "audio/x-realaudio": ["*ra"],
        "audio/x-wav": ["*wav"],
        "chemical/x-cdx": ["cdx"],
        "chemical/x-cif": ["cif"],
        "chemical/x-cmdf": ["cmdf"],
        "chemical/x-cml": ["cml"],
        "chemical/x-csml": ["csml"],
        "chemical/x-xyz": ["xyz"],
        "image/prs.btif": ["btif"],
        "image/prs.pti": ["pti"],
        "image/vnd.adobe.photoshop": ["psd"],
        "image/vnd.airzip.accelerator.azv": ["azv"],
        "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
        "image/vnd.djvu": ["djvu", "djv"],
        "image/vnd.dvb.subtitle": ["*sub"],
        "image/vnd.dwg": ["dwg"],
        "image/vnd.dxf": ["dxf"],
        "image/vnd.fastbidsheet": ["fbs"],
        "image/vnd.fpx": ["fpx"],
        "image/vnd.fst": ["fst"],
        "image/vnd.fujixerox.edmics-mmr": ["mmr"],
        "image/vnd.fujixerox.edmics-rlc": ["rlc"],
        "image/vnd.microsoft.icon": ["ico"],
        "image/vnd.ms-dds": ["dds"],
        "image/vnd.ms-modi": ["mdi"],
        "image/vnd.ms-photo": ["wdp"],
        "image/vnd.net-fpx": ["npx"],
        "image/vnd.pco.b16": ["b16"],
        "image/vnd.tencent.tap": ["tap"],
        "image/vnd.valve.source.texture": ["vtf"],
        "image/vnd.wap.wbmp": ["wbmp"],
        "image/vnd.xiff": ["xif"],
        "image/vnd.zbrush.pcx": ["pcx"],
        "image/x-3ds": ["3ds"],
        "image/x-cmu-raster": ["ras"],
        "image/x-cmx": ["cmx"],
        "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
        "image/x-icon": ["*ico"],
        "image/x-jng": ["jng"],
        "image/x-mrsid-image": ["sid"],
        "image/x-ms-bmp": ["*bmp"],
        "image/x-pcx": ["*pcx"],
        "image/x-pict": ["pic", "pct"],
        "image/x-portable-anymap": ["pnm"],
        "image/x-portable-bitmap": ["pbm"],
        "image/x-portable-graymap": ["pgm"],
        "image/x-portable-pixmap": ["ppm"],
        "image/x-rgb": ["rgb"],
        "image/x-tga": ["tga"],
        "image/x-xbitmap": ["xbm"],
        "image/x-xpixmap": ["xpm"],
        "image/x-xwindowdump": ["xwd"],
        "message/vnd.wfa.wsc": ["wsc"],
        "model/vnd.collada+xml": ["dae"],
        "model/vnd.dwf": ["dwf"],
        "model/vnd.gdl": ["gdl"],
        "model/vnd.gtw": ["gtw"],
        "model/vnd.mts": ["mts"],
        "model/vnd.opengex": ["ogex"],
        "model/vnd.parasolid.transmit.binary": ["x_b"],
        "model/vnd.parasolid.transmit.text": ["x_t"],
        "model/vnd.sap.vds": ["vds"],
        "model/vnd.usdz+zip": ["usdz"],
        "model/vnd.valve.source.compiled-map": ["bsp"],
        "model/vnd.vtu": ["vtu"],
        "text/prs.lines.tag": ["dsc"],
        "text/vnd.curl": ["curl"],
        "text/vnd.curl.dcurl": ["dcurl"],
        "text/vnd.curl.mcurl": ["mcurl"],
        "text/vnd.curl.scurl": ["scurl"],
        "text/vnd.dvb.subtitle": ["sub"],
        "text/vnd.fly": ["fly"],
        "text/vnd.fmi.flexstor": ["flx"],
        "text/vnd.graphviz": ["gv"],
        "text/vnd.in3d.3dml": ["3dml"],
        "text/vnd.in3d.spot": ["spot"],
        "text/vnd.sun.j2me.app-descriptor": ["jad"],
        "text/vnd.wap.wml": ["wml"],
        "text/vnd.wap.wmlscript": ["wmls"],
        "text/x-asm": ["s", "asm"],
        "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
        "text/x-component": ["htc"],
        "text/x-fortran": ["f", "for", "f77", "f90"],
        "text/x-handlebars-template": ["hbs"],
        "text/x-java-source": ["java"],
        "text/x-lua": ["lua"],
        "text/x-markdown": ["mkd"],
        "text/x-nfo": ["nfo"],
        "text/x-opml": ["opml"],
        "text/x-org": ["*org"],
        "text/x-pascal": ["p", "pas"],
        "text/x-processing": ["pde"],
        "text/x-sass": ["sass"],
        "text/x-scss": ["scss"],
        "text/x-setext": ["etx"],
        "text/x-sfv": ["sfv"],
        "text/x-suse-ymp": ["ymp"],
        "text/x-uuencode": ["uu"],
        "text/x-vcalendar": ["vcs"],
        "text/x-vcard": ["vcf"],
        "video/vnd.dece.hd": ["uvh", "uvvh"],
        "video/vnd.dece.mobile": ["uvm", "uvvm"],
        "video/vnd.dece.pd": ["uvp", "uvvp"],
        "video/vnd.dece.sd": ["uvs", "uvvs"],
        "video/vnd.dece.video": ["uvv", "uvvv"],
        "video/vnd.dvb.file": ["dvb"],
        "video/vnd.fvt": ["fvt"],
        "video/vnd.mpegurl": ["mxu", "m4u"],
        "video/vnd.ms-playready.media.pyv": ["pyv"],
        "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
        "video/vnd.vivo": ["viv"],
        "video/x-f4v": ["f4v"],
        "video/x-fli": ["fli"],
        "video/x-flv": ["flv"],
        "video/x-m4v": ["m4v"],
        "video/x-matroska": ["mkv", "mk3d", "mks"],
        "video/x-mng": ["mng"],
        "video/x-ms-asf": ["asf", "asx"],
        "video/x-ms-vob": ["vob"],
        "video/x-ms-wm": ["wm"],
        "video/x-ms-wmv": ["wmv"],
        "video/x-ms-wmx": ["wmx"],
        "video/x-ms-wvx": ["wvx"],
        "video/x-msvideo": ["avi"],
        "video/x-sgi-movie": ["movie"],
        "video/x-smv": ["smv"],
        "x-conference/x-cooltalk": ["ice"],
    };
});
var mn = L((Ss, dn) => {
    "use strict";
    var pi = qe();
    dn.exports = new pi(We(), pn());
});
function Di(e) {
    return e.replace(
        /\r\n|\r(?!\n)|\n/g,
        `
`,
    );
}
function hi(e, t) {
    if (!t || t.line === void 0 || t.column === void 0) return "";
    let a = Di(e)
            .split(
                `
`,
            )
            .map((o) => o.replace(/\t/g, "  ")),
        n = [];
    for (let o = -2; o <= 2; o++) a[t.line + o] && n.push(t.line + o);
    let r = 0;
    for (let o of n) {
        let s = `> ${o}`;
        s.length > r && (r = s.length);
    }
    let i = "";
    for (let o of n) {
        let s = o === t.line - 1;
        (i += s ? "> " : "  "),
            (i += `${o + 1} | ${a[o]}
`),
            s &&
                (i += `${Array.from({ length: r }).join(" ")}  | ${Array.from({
                    length: t.column,
                }).join(" ")}^
`);
    }
    return i;
}
function gi(e) {
    return e ? "transform" in e : !1;
}
function yn(e) {
    let t = e.width,
        a = e.height;
    if (M(e.src)) {
        let n = e.src.width / e.src.height;
        a && !t
            ? (t = Math.round(a * n))
            : t && !a
            ? (a = Math.round(t / n))
            : !t && !a && ((t = e.src.width), (a = e.src.height));
    }
    return { targetWidth: t, targetHeight: a };
}
function xi(e, t) {
    return (
        Fi(e, t.protocol) &&
        jn(e, t.hostname, !0) &&
        vi(e, t.port) &&
        yi(e, t.pathname, !0)
    );
}
function vi(e, t) {
    return !t || t === e.port;
}
function Fi(e, t) {
    return !t || t === e.protocol.slice(0, -1);
}
function jn(e, t, a) {
    if (t) {
        if (!a || !t.startsWith("*")) return t === e.hostname;
        if (t.startsWith("**.")) {
            let n = t.slice(2);
            return n !== e.hostname && e.hostname.endsWith(n);
        } else if (t.startsWith("*.")) {
            let n = t.slice(1);
            return (
                e.hostname.replace(n, "").split(".").filter(Boolean).length ===
                1
            );
        }
    } else return !0;
    return !1;
}
function yi(e, t, a) {
    if (t) {
        if (!a || !t.endsWith("*")) return t === e.pathname;
        if (t.endsWith("/**")) {
            let n = t.slice(0, -2);
            return n !== e.pathname && e.pathname.startsWith(n);
        } else if (t.endsWith("/*")) {
            let n = t.slice(0, -1);
            return (
                e.pathname.replace(n, "").split("/").filter(Boolean).length ===
                1
            );
        }
    } else return !0;
    return !1;
}
function M(e) {
    return typeof e == "object";
}
function wi(e) {
    return typeof e == "string";
}
function it(e, { domains: t = [], remotePatterns: a = [] }) {
    if (!U(e)) return !1;
    let n = new URL(e);
    return t.some((r) => jn(n, r)) || a.some((r) => xi(n, r));
}
async function rt() {
    if (!globalThis?.astroAsset?.imageService) {
        let { default: e } = await Promise.resolve()
            .then(() => Ci)
            .catch((t) => {
                let a = new m(di);
                throw ((a.cause = t), a);
            });
        return (
            globalThis.astroAsset || (globalThis.astroAsset = {}),
            (globalThis.astroAsset.imageService = e),
            e
        );
    }
    return globalThis.astroAsset.imageService;
}
async function kn(e, t) {
    if (!e || typeof e != "object")
        throw new m({ ...gn, message: gn.message(JSON.stringify(e)) });
    let a = await rt(),
        n = {
            ...e,
            src:
                typeof e.src == "object" && "then" in e.src
                    ? (await e.src).default ?? (await e.src)
                    : e.src,
        },
        r = M(n.src) ? n.src.clone ?? n.src : n.src;
    n.src = r;
    let i = a.validateOptions ? await a.validateOptions(n, t) : n,
        o = a.getSrcSet ? await a.getSrcSet(i, t) : [],
        s = await a.getURL(i, t),
        c = await Promise.all(
            o.map(async (l) => ({
                transform: l.transform,
                url: await a.getURL(l.transform, t),
                descriptor: l.descriptor,
                attributes: l.attributes,
            })),
        );
    if (
        gi(a) &&
        globalThis.astroAsset.addStaticImage &&
        !(wi(i.src) && s === i.src)
    ) {
        let l = a.propertiesToHash ?? Bn;
        (s = globalThis.astroAsset.addStaticImage(i, l)),
            (c = o.map((u) => ({
                transform: u.transform,
                url: globalThis.astroAsset.addStaticImage(u.transform, l),
                descriptor: u.descriptor,
                attributes: u.attributes,
            })));
    }
    return {
        rawOptions: n,
        options: i,
        src: s,
        srcSet: {
            values: c,
            attribute: c.map((l) => `${l.url} ${l.descriptor}`).join(", "),
        },
        attributes:
            a.getHTMLAttributes !== void 0
                ? await a.getHTMLAttributes(i, t)
                : {},
    };
}
var W,
    ge,
    xe,
    Ve,
    wn,
    ve,
    Ge,
    Fe,
    Je,
    Ye,
    bn,
    En,
    Xe,
    Cn,
    Ke,
    Ze,
    Qe,
    et,
    tt,
    di,
    fn,
    Dn,
    mi,
    ye,
    hn,
    gn,
    fi,
    V,
    An,
    we,
    be,
    xn,
    nt,
    at,
    Sn,
    m,
    vn,
    Fn,
    Bn,
    he,
    bi,
    Ei,
    Ci,
    te = A(() => {
        "use strict";
        ee();
        (W = {
            name: "ClientAddressNotAvailable",
            title: "`Astro.clientAddress` is not available in current adapter.",
            message: (e) =>
                `\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`,
        }),
            (ge = {
                name: "StaticClientAddressNotAvailable",
                title: "`Astro.clientAddress` is not available in static mode.",
                message:
                    "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
                hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information on how to enable SSR.",
            }),
            (xe = {
                name: "NoMatchingStaticPathFound",
                title: "No static path found for requested path.",
                message: (e) =>
                    `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,
                hint: (e) =>
                    `Possible dynamic routes being matched: ${e.join(", ")}.`,
            }),
            (Ve = {
                name: "OnlyResponseCanBeReturned",
                title: "Invalid type returned by Astro page.",
                message: (e, t) =>
                    `Route \`${
                        e || ""
                    }\` returned a \`${t}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
                hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information.",
            }),
            (wn = {
                name: "MissingMediaQueryDirective",
                title: "Missing value for `client:media` directive.",
                message:
                    'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided',
            }),
            (ve = {
                name: "NoMatchingRenderer",
                title: "No matching renderer found.",
                message: (e, t, a, n) => `Unable to render \`${e}\`.

${
    n > 0
        ? `There ${a ? "are" : "is"} ${n} renderer${
              a ? "s" : ""
          } configured in your \`astro.config.mjs\` file,
but ${a ? "none were" : "it was not"} able to server-side render \`${e}\`.`
        : `No valid renderer was found ${
              t
                  ? `for the \`.${t}\` file extension.`
                  : "for this file extension."
          }`
}`,
                hint: (e) => `Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`,
            }),
            (Ge = {
                name: "NoClientEntrypoint",
                title: "No client entrypoint specified in renderer.",
                message: (e, t, a) =>
                    `\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${a}\`.`,
                hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer.",
            }),
            (Fe = {
                name: "NoClientOnlyHint",
                title: "Missing hint on client:only directive.",
                message: (e) =>
                    `Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
                hint: (e) =>
                    `Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`,
            }),
            (Je = {
                name: "InvalidGetStaticPathsEntry",
                title: "Invalid entry inside getStaticPath's return value",
                message: (e) =>
                    `Invalid entry returned by getStaticPaths. Expected an object, got \`${e}\``,
                hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
            }),
            (Ye = {
                name: "InvalidGetStaticPathsReturn",
                title: "Invalid value returned by getStaticPaths.",
                message: (e) =>
                    `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,
                hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
            }),
            (bn = {
                name: "GetStaticPathsRemovedRSSHelper",
                title: "getStaticPaths RSS helper is not available anymore.",
                message:
                    "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
                hint: "See https://docs.astro.build/en/guides/rss/ for more information.",
            }),
            (En = {
                name: "GetStaticPathsExpectedParams",
                title: "Missing params property on `getStaticPaths` route.",
                message:
                    "Missing or empty required `params` property on `getStaticPaths` route.",
                hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
            }),
            (Xe = {
                name: "GetStaticPathsInvalidRouteParam",
                title: "Invalid value for `getStaticPaths` route parameter.",
                message: (e, t, a) =>
                    `Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${a}\` (\`${t}\`)`,
                hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
            }),
            (Cn = {
                name: "GetStaticPathsRequired",
                title: "`getStaticPaths()` function required for dynamic routes.",
                message:
                    "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
                hint: 'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` or `output: "hybrid"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.',
            }),
            (Ke = {
                name: "ReservedSlotName",
                title: "Invalid slot name.",
                message: (e) =>
                    `Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`,
            }),
            (Ze = {
                name: "NoMatchingImport",
                title: "No import found for component.",
                message: (e) =>
                    `Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,
                hint: "Please make sure the component is properly imported.",
            }),
            (Qe = {
                name: "InvalidComponentArgs",
                title: "Invalid component arguments.",
                message: (e) =>
                    `Invalid arguments passed to${
                        e ? ` <${e}>` : ""
                    } component.`,
                hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`.",
            }),
            (et = {
                name: "PageNumberParamNotFound",
                title: "Page number param not found.",
                message: (e) =>
                    `[paginate()] page number param \`${e}\` not found in your filepath.`,
                hint: "Rename your file to `[page].astro` or `[...page].astro`.",
            }),
            (tt = {
                name: "ImageMissingAlt",
                title: "Missing alt property.",
                message: "The alt property is required.",
                hint: "The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information.",
            }),
            (di = {
                name: "InvalidImageService",
                title: "Error while loading image service.",
                message:
                    "There was an error loading the configured image service. Please see the stack trace for more information.",
            }),
            (fn = {
                name: "MissingImageDimension",
                title: "Missing image dimensions",
                message: (e, t) =>
                    `Missing ${
                        e === "both"
                            ? "width and height attributes"
                            : `${e} attribute`
                    } for ${t}. When using remote images, both dimensions are always required in order to avoid CLS.`,
                hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets).",
            }),
            (Dn = {
                name: "UnsupportedImageFormat",
                title: "Unsupported image format",
                message: (e, t, a) =>
                    `Received unsupported format \`${e}\` from \`${t}\`. Currently only ${a.join(
                        ", ",
                    )} are supported by our image services.`,
                hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for.",
            }),
            (mi = {
                name: "UnsupportedImageConversion",
                title: "Unsupported image conversion",
                message:
                    "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported.",
            }),
            (ye = {
                name: "PrerenderDynamicEndpointPathCollide",
                title: "Prerendered dynamic endpoint has path collision.",
                message: (e) =>
                    `Could not render \`${e}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
                hint: (e) =>
                    `Rename \`${e}\` to \`${e.replace(
                        /\.(js|ts)/,
                        (t) => ".json" + t,
                    )}\``,
            }),
            (hn = {
                name: "ExpectedImage",
                title: "Expected src to be an image.",
                message: (
                    e,
                    t,
                    a,
                ) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${a}\`.`,
                hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it.",
            }),
            (gn = {
                name: "ExpectedImageOptions",
                title: "Expected image options.",
                message: (e) =>
                    `Expected getImage() parameter to be an object. Received \`${e}\`.`,
            }),
            (fi = {
                name: "IncompatibleDescriptorOptions",
                title: "Cannot set both `densities` and `widths`",
                message:
                    "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
                hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors.",
            }),
            (V = {
                name: "ResponseSentError",
                title: "Unable to set response.",
                message:
                    "The response has already been sent to the browser and cannot be altered.",
            }),
            (An = {
                name: "MiddlewareNoDataOrNextCalled",
                title: "The middleware didn't return a response or call `next`.",
                message:
                    "The middleware needs to either return a `Response` object or call the `next` function.",
            }),
            (we = {
                name: "MiddlewareNotAResponse",
                title: "The middleware returned something that is not a `Response` object.",
                message:
                    "Any data returned from middleware must be a valid `Response` object.",
            }),
            (be = {
                name: "LocalsNotAnObject",
                title: "Value assigned to `locals` is not accepted.",
                message:
                    "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
                hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`.",
            }),
            (xn = {
                name: "LocalImageUsedWrongly",
                title: "Local images must be imported.",
                message: (e) =>
                    `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,
                hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections) See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property.",
            }),
            (nt = {
                name: "AstroGlobUsedOutside",
                title: "Astro.glob() used outside of an Astro file.",
                message: (e) =>
                    `\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,
                hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import",
            }),
            (at = {
                name: "AstroGlobNoMatch",
                title: "Astro.glob() did not match any files.",
                message: (e) =>
                    `\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`,
            }),
            (Sn = {
                name: "CantRenderPage",
                title: "Astro can't render the route.",
                message:
                    "Astro cannot find any content to render for this route. There is no file or redirect associated with this route.",
                hint: "If you expect to find a route here, this may be an Astro bug. Please file an issue/restart the dev server",
            });
        (m = class extends Error {
            loc;
            title;
            hint;
            frame;
            type = "AstroError";
            constructor(t, ...a) {
                super(...a);
                let {
                    name: n,
                    title: r,
                    message: i,
                    stack: o,
                    location: s,
                    hint: c,
                    frame: l,
                } = t;
                (this.title = r),
                    (this.name = n),
                    i && (this.message = i),
                    (this.stack = o || this.stack),
                    (this.loc = s),
                    (this.hint = c),
                    (this.frame = l);
            }
            setLocation(t) {
                this.loc = t;
            }
            setName(t) {
                this.name = t;
            }
            setMessage(t) {
                this.message = t;
            }
            setHint(t) {
                this.hint = t;
            }
            setFrame(t, a) {
                this.frame = hi(t, a);
            }
            static is(t) {
                return t.type === "AstroError";
            }
        }),
            (vn = ["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"]),
            (Fn = "webp"),
            (Bn = ["src", "width", "height", "format", "quality"]);
        he = {
            propertiesToHash: Bn,
            validateOptions(e) {
                if (
                    !e.src ||
                    (typeof e.src != "string" && typeof e.src != "object")
                )
                    throw new m({
                        ...hn,
                        message: hn.message(
                            JSON.stringify(e.src),
                            typeof e.src,
                            JSON.stringify(e, (t, a) =>
                                a === void 0 ? null : a,
                            ),
                        ),
                    });
                if (M(e.src)) {
                    if (!vn.includes(e.src.format))
                        throw new m({
                            ...Dn,
                            message: Dn.message(e.src.format, e.src.src, vn),
                        });
                    if (e.widths && e.densities) throw new m(fi);
                    if (
                        (e.src.format === "svg" && (e.format = "svg"),
                        (e.src.format === "svg" && e.format !== "svg") ||
                            (e.src.format !== "svg" && e.format === "svg"))
                    )
                        throw new m(mi);
                } else {
                    if (
                        e.src.startsWith("/@fs/") ||
                        (!U(e.src) && !e.src.startsWith("/"))
                    )
                        throw new m({ ...xn, message: xn.message(e.src) });
                    let t;
                    if (
                        (!e.width && !e.height
                            ? (t = "both")
                            : !e.width && e.height
                            ? (t = "width")
                            : e.width && !e.height && (t = "height"),
                        t)
                    )
                        throw new m({ ...fn, message: fn.message(t, e.src) });
                }
                return (
                    e.format || (e.format = Fn),
                    e.width && (e.width = Math.round(e.width)),
                    e.height && (e.height = Math.round(e.height)),
                    e
                );
            },
            getHTMLAttributes(e) {
                let { targetWidth: t, targetHeight: a } = yn(e),
                    {
                        src: n,
                        width: r,
                        height: i,
                        format: o,
                        quality: s,
                        densities: c,
                        widths: l,
                        formats: u,
                        ...p
                    } = e;
                return {
                    ...p,
                    width: t,
                    height: a,
                    loading: p.loading ?? "lazy",
                    decoding: p.decoding ?? "async",
                };
            },
            getSrcSet(e) {
                let t = [],
                    { targetWidth: a } = yn(e),
                    { widths: n, densities: r } = e,
                    i = e.format ?? Fn,
                    o = e.width,
                    s = 1 / 0;
                M(e.src) && ((o = e.src.width), (s = o));
                let { width: c, height: l, ...u } = e,
                    p = [];
                if (r) {
                    let d = r.map((D) =>
                            typeof D == "number" ? D : parseFloat(D),
                        ),
                        h = d.sort().map((D) => Math.round(a * D));
                    p.push(
                        ...h.map((D, g) => ({
                            maxTargetWidth: Math.min(D, s),
                            descriptor: `${d[g]}x`,
                        })),
                    );
                } else
                    n &&
                        p.push(
                            ...n.map((d) => ({
                                maxTargetWidth: Math.min(d, s),
                                descriptor: `${d}w`,
                            })),
                        );
                for (let { maxTargetWidth: d, descriptor: h } of p) {
                    let D = { ...u };
                    d !== o
                        ? (D.width = d)
                        : e.width &&
                          e.height &&
                          ((D.width = e.width), (D.height = e.height)),
                        t.push({
                            transform: D,
                            descriptor: h,
                            attributes: { type: `image/${i}` },
                        });
                }
                return t;
            },
            getURL(e, t) {
                let a = new URLSearchParams();
                if (M(e.src)) a.append("href", e.src.src);
                else if (it(e.src, t)) a.append("href", e.src);
                else return e.src;
                return (
                    Object.entries({
                        w: "width",
                        h: "height",
                        q: "quality",
                        f: "format",
                    }).forEach(([i, o]) => {
                        e[o] && a.append(i, e[o].toString());
                    }),
                    `${H("/", "/_image")}?${a}`
                );
            },
            parseURL(e) {
                let t = e.searchParams;
                return t.has("href")
                    ? {
                          src: t.get("href"),
                          width: t.has("w") ? parseInt(t.get("w")) : void 0,
                          height: t.has("h") ? parseInt(t.get("h")) : void 0,
                          format: t.get("f"),
                          quality: t.get("q"),
                      }
                    : void 0;
            },
        };
        (bi = {
            validateOptions: he.validateOptions,
            getURL: he.getURL,
            parseURL: he.parseURL,
            getHTMLAttributes: he.getHTMLAttributes,
            async transform(e, t) {
                return { data: e, format: t.format };
            },
        }),
            (Ei = bi),
            (Ci = Object.freeze(
                Object.defineProperty(
                    { __proto__: null, default: Ei },
                    Symbol.toStringTag,
                    { value: "Module" },
                ),
            ));
    });
function Rn(e) {
    var t,
        a,
        n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (a = Rn(e[t])) && (n && (n += " "), (n += a));
        else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
}
function ot() {
    for (var e, t, a = 0, n = ""; a < arguments.length; )
        (e = arguments[a++]) && (t = Rn(e)) && (n && (n += " "), (n += t));
    return n;
}
var ne = A(() => {});
var Ai,
    Si,
    Bi,
    ji,
    $n,
    Pn = A(() => {
        ({ replace: Ai } = ""),
            (Si = /[&<>'"]/g),
            (Bi = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
            }),
            (ji = (e) => Bi[e]),
            ($n = (e) => Ai.call(e, Si, ji));
    });
function ki(e) {
    return !(e.length !== 3 || !e[0] || typeof e[0] != "object");
}
function Hn(e, t, a) {
    let n = t?.split("/").pop()?.replace(".astro", "") ?? "",
        r = (...i) => {
            if (!ki(i)) throw new m({ ...Qe, message: Qe.message(n) });
            return e(...i);
        };
    return (
        Object.defineProperty(r, "name", { value: n, writable: !1 }),
        (r.isAstroComponentFactory = !0),
        (r.moduleId = t),
        (r.propagation = a),
        r
    );
}
function Ri(e) {
    return Hn(e.factory, e.moduleId, e.propagation);
}
function vt(e, t, a) {
    return typeof e == "function" ? Hn(e, t, a) : Ri(e);
}
function $i() {
    return (t) => {
        if (typeof t == "string")
            throw new m({ ...nt, message: nt.message(JSON.stringify(t)) });
        let a = [...Object.values(t)];
        if (a.length === 0)
            throw new m({ ...at, message: at.message(JSON.stringify(t)) });
        return Promise.all(a.map((n) => n()));
    };
}
function yt(e) {
    return {
        site: e ? new URL(e) : void 0,
        generator: `Astro v${Ft}`,
        glob: $i(),
    };
}
function Pi(e, t, a) {
    let n = t.toLowerCase();
    if (
        (e[n] &&
            a.warn(
                "astro",
                `Lower case endpoint names are deprecated and will not be supported in Astro 4.0. Rename the endpoint ${n} to ${t}.`,
            ),
        e[t])
    )
        return e[t];
    if (e[n]) return e[n];
    if (t === "delete" && e.del) return e.del;
    if (e.all) return e.all;
    if (e.ALL) return e.ALL;
}
async function wt(e, t, a, n) {
    let { request: r } = t,
        i = r.method?.toUpperCase(),
        o = Pi(e, i, n);
    if (
        (!a &&
            a === !1 &&
            i &&
            i !== "GET" &&
            i !== "get" &&
            console.warn(`
${i} requests are not available when building a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` with an \`export const prerender = false\` to handle ${i} requests.`),
        !o || typeof o != "function")
    )
        return new Response(null, {
            status: 404,
            headers: { "X-Astro-Response": "Not-Found" },
        });
    let s = new Proxy(t, {
        get(c, l) {
            if (l in c) return Reflect.get(c, l);
        },
    });
    return o.call(e, s, r);
}
function bt(e) {
    return !!e && typeof e == "object" && typeof e.then == "function";
}
function Ti(e) {
    return Object.prototype.toString.call(e) === "[object HTMLString]";
}
function Tn(e) {
    return e && typeof e == "object" && e[Un];
}
function Wn(e) {
    return Object.defineProperty(e, qn, { value: !0 });
}
function Li(e) {
    return e && typeof e == "object" && e[qn];
}
function st(e, t = {}, a = new WeakSet()) {
    if (a.has(e))
        throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
    a.add(e);
    let n = e.map((r) => Gn(r, t, a));
    return a.delete(e), n;
}
function Vn(e, t = {}, a = new WeakSet()) {
    if (a.has(e))
        throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
    a.add(e);
    let n = Object.fromEntries(
        Object.entries(e).map(([r, i]) => [r, Gn(i, t, a)]),
    );
    return a.delete(e), n;
}
function Gn(e, t = {}, a = new WeakSet()) {
    switch (Object.prototype.toString.call(e)) {
        case "[object Date]":
            return [C.Date, e.toISOString()];
        case "[object RegExp]":
            return [C.RegExp, e.source];
        case "[object Map]":
            return [C.Map, st(Array.from(e), t, a)];
        case "[object Set]":
            return [C.Set, st(Array.from(e), t, a)];
        case "[object BigInt]":
            return [C.BigInt, e.toString()];
        case "[object URL]":
            return [C.URL, e.toString()];
        case "[object Array]":
            return [C.JSON, st(e, t, a)];
        case "[object Uint8Array]":
            return [C.Uint8Array, Array.from(e)];
        case "[object Uint16Array]":
            return [C.Uint16Array, Array.from(e)];
        case "[object Uint32Array]":
            return [C.Uint32Array, Array.from(e)];
        default:
            return e !== null && typeof e == "object"
                ? [C.Value, Vn(e, t, a)]
                : e === void 0
                ? [C.Value]
                : [C.Value, e];
    }
}
function Jn(e, t) {
    return JSON.stringify(Vn(e, t));
}
function Mi(e, t) {
    let a = {
        isPage: !1,
        hydration: null,
        props: {},
        propsWithoutTransitionAttributes: {},
    };
    for (let [n, r] of Object.entries(e))
        if (
            (n.startsWith("server:") && n === "server:root" && (a.isPage = !0),
            n.startsWith("client:"))
        )
            switch (
                (a.hydration ||
                    (a.hydration = {
                        directive: "",
                        value: "",
                        componentUrl: "",
                        componentExport: { value: "" },
                    }),
                n)
            ) {
                case "client:component-path": {
                    a.hydration.componentUrl = r;
                    break;
                }
                case "client:component-export": {
                    a.hydration.componentExport.value = r;
                    break;
                }
                case "client:component-hydration":
                    break;
                case "client:display-name":
                    break;
                default: {
                    if (
                        ((a.hydration.directive = n.split(":")[1]),
                        (a.hydration.value = r),
                        !t.has(a.hydration.directive))
                    ) {
                        let i = Array.from(t.keys())
                            .map((o) => `client:${o}`)
                            .join(", ");
                        throw new Error(
                            `Error: invalid hydration directive "${n}". Supported hydration methods: ${i}`,
                        );
                    }
                    if (
                        a.hydration.directive === "media" &&
                        typeof a.hydration.value != "string"
                    )
                        throw new m(wn);
                    break;
                }
            }
        else
            (a.props[n] = r),
                Yn.includes(n) || (a.propsWithoutTransitionAttributes[n] = r);
    for (let n of Object.getOwnPropertySymbols(e))
        (a.props[n] = e[n]), (a.propsWithoutTransitionAttributes[n] = e[n]);
    return a;
}
async function Ii(e, t) {
    let { renderer: a, result: n, astroId: r, props: i, attrs: o } = e,
        { hydrate: s, componentUrl: c, componentExport: l } = t;
    if (!l.value) throw new m({ ...Ze, message: Ze.message(t.displayName) });
    let u = { children: "", props: { uid: r } };
    if (o) for (let [d, h] of Object.entries(o)) u.props[d] = ie(h);
    (u.props["component-url"] = await n.resolve(decodeURI(c))),
        a.clientEntrypoint &&
            ((u.props["component-export"] = l.value),
            (u.props["renderer-url"] = await n.resolve(
                decodeURI(a.clientEntrypoint),
            )),
            (u.props.props = ie(Jn(i, t)))),
        (u.props.ssr = ""),
        (u.props.client = s);
    let p = await n.resolve("astro:scripts/before-hydration.js");
    return (
        p.length && (u.props["before-hydration-url"] = p),
        (u.props.opts = ie(
            JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" }),
        )),
        Yn.forEach((d) => {
            i[d] && (u.props[d] = i[d]);
        }),
        u
    );
}
function _i(e) {
    let t = 0;
    if (e.length === 0) return t;
    for (let a = 0; a < e.length; a++) {
        let n = e.charCodeAt(a);
        (t = (t << 5) - t + n), (t = t & t);
    }
    return t;
}
function Oi(e) {
    let t,
        a = "",
        n = _i(e),
        r = n < 0 ? "Z" : "";
    for (n = Math.abs(n); n >= ut; )
        (t = n % ut), (n = Math.floor(n / ut)), (a = pt[t] + a);
    return n > 0 && (a = pt[n] + a), r + a;
}
function Xn(e) {
    return e == null ? !1 : e.isAstroComponentFactory === !0;
}
function Ni(e, t) {
    let a = t.propagation || "none";
    return (
        t.moduleId &&
            e.componentMetadata.has(t.moduleId) &&
            a === "none" &&
            (a = e.componentMetadata.get(t.moduleId).propagation),
        a === "in-tree" || a === "self"
    );
}
function Et(e) {
    return typeof e == "object" && !!e[zi];
}
function qi(e) {
    return e._metadata.hasHydrationScript
        ? !1
        : (e._metadata.hasHydrationScript = !0);
}
function Wi(e, t) {
    return e._metadata.hasDirectives.has(t)
        ? !1
        : (e._metadata.hasDirectives.add(t), !0);
}
function Ln(e, t) {
    let n = e.clientDirectives.get(t);
    if (!n) throw new Error(`Unknown directive: ${t}`);
    return n;
}
function Vi(e, t, a) {
    switch (t) {
        case "both":
            return `${Ui}<script>${Ln(e, a)};${Hi}<\/script>`;
        case "directive":
            return `<script>${Ln(e, a)}<\/script>`;
    }
    return "";
}
function Qi(e) {
    let t = "";
    for (let [a, n] of Object.entries(e))
        t += `const ${Ki(a)} = ${JSON.stringify(n)?.replace(
            /<\/script>/g,
            "\\x3C/script>",
        )};
`;
    return F(t);
}
function In(e) {
    return e.length === 1
        ? e[0]
        : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function O(e, t, a = !0) {
    if (e == null) return "";
    if (e === !1) return Ji.test(t) || Yi.test(t) ? F(` ${t}="false"`) : "";
    if (Xi.has(t))
        return (
            console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),
            ""
        );
    if (t === "class:list") {
        let n = G(ot(e), a);
        return n === "" ? "" : F(` ${t.slice(0, -5)}="${n}"`);
    }
    if (t === "style" && !(e instanceof _)) {
        if (Array.isArray(e) && e.length === 2)
            return F(` ${t}="${G(`${Mn(e[0])};${e[1]}`, a)}"`);
        if (typeof e == "object") return F(` ${t}="${G(Mn(e), a)}"`);
    }
    return t === "className"
        ? F(` class="${G(e, a)}"`)
        : e === !0 && (t.startsWith("data-") || Gi.test(t))
        ? F(` ${t}`)
        : F(` ${t}="${G(e, a)}"`);
}
function dt(e, t = !0) {
    let a = "";
    for (let [n, r] of Object.entries(e)) a += O(r, n, t);
    return F(a);
}
function ae(e, { props: t, children: a = "" }, n = !0) {
    let { lang: r, "data-astro-id": i, "define:vars": o, ...s } = t;
    return (
        o &&
            (e === "style" && (delete s["is:global"], delete s["is:scoped"]),
            e === "script" &&
                (delete s.hoist,
                (a =
                    Qi(o) +
                    `
` +
                    a))),
        (a == null || a == "") && Ct.test(e)
            ? `<${e}${dt(s, n)} />`
            : `<${e}${dt(s, n)}>${a}</${e}>`
    );
}
function Kn(e) {
    let t = [],
        a = { write: (r) => t.push(r) },
        n = e(a);
    return {
        async renderToFinalDestination(r) {
            for (let i of t) r.write(i);
            (a.write = (i) => r.write(i)), await n;
        },
    };
}
function _n(e) {
    e._metadata.hasRenderedHead = !0;
    let t = Array.from(e.styles)
        .filter(ct)
        .map((i) =>
            i.props.rel === "stylesheet" ? ae("link", i) : ae("style", i),
        );
    e.styles.clear();
    let a = Array.from(e.scripts)
            .filter(ct)
            .map((i) => ae("script", i, !1)),
        n = Array.from(e.links)
            .filter(ct)
            .map((i) => ae("link", i, !1)),
        r =
            t.join(`
`) +
            n.join(`
`) +
            a.join(`
`);
    if (e._metadata.extraHead.length > 0)
        for (let i of e._metadata.extraHead) r += i;
    return F(r);
}
function* Ae() {
    yield Wn({ type: "maybe-head" });
}
function er(e) {
    return !!e[mt];
}
function Zn(e, t, a) {
    return !t && a
        ? Zn(e, a)
        : {
              async render(n) {
                  await J(n, typeof t == "function" ? t(e) : t);
              },
          };
}
async function N(e, t, a) {
    let n = "",
        r = null,
        i = {
            write(s) {
                s instanceof Response ||
                    (typeof s == "object" &&
                    "type" in s &&
                    typeof s.type == "string"
                        ? (r === null && (r = []), r.push(s))
                        : (n += $(e, s)));
            },
        };
    return await Zn(e, t, a).render(i), F(new Ee(n, r));
}
async function Qn(e, t = {}) {
    let a = null,
        n = {};
    return (
        t &&
            (await Promise.all(
                Object.entries(t).map(([r, i]) =>
                    N(e, i).then((o) => {
                        o.instructions &&
                            (a === null && (a = []), a.push(...o.instructions)),
                            (n[r] = o);
                    }),
                ),
            )),
        { slotInstructions: a, children: n }
    );
}
function At(e, t) {
    if (Li(t)) {
        let a = t;
        switch (a.type) {
            case "directive": {
                let { hydration: n } = a,
                    r = n && qi(e),
                    i = n && Wi(e, n.directive),
                    o = r ? "both" : i ? "directive" : null;
                if (o) {
                    let s = Vi(e, o, n.directive);
                    return F(s);
                } else return "";
            }
            case "head":
                return e._metadata.hasRenderedHead || e.partial ? "" : _n(e);
            case "maybe-head":
                return e._metadata.hasRenderedHead ||
                    e._metadata.headInTree ||
                    e.partial
                    ? ""
                    : _n(e);
            default:
                throw new Error(`Unknown chunk type: ${t.type}`);
        }
    } else {
        if (t instanceof Response) return "";
        if (er(t)) {
            let a = "",
                n = t;
            if (n.instructions) for (let r of n.instructions) a += At(e, r);
            return (a += t.toString()), a;
        }
    }
    return t.toString();
}
function $(e, t) {
    return ArrayBuffer.isView(t) ? nr.decode(t) : At(e, t);
}
function ar(e, t) {
    if (ArrayBuffer.isView(t)) return t;
    {
        let a = At(e, t);
        return Ce.encode(a.toString());
    }
}
function ir(e) {
    return (
        !!e &&
        typeof e == "object" &&
        "render" in e &&
        typeof e.render == "function"
    );
}
async function J(e, t) {
    if (((t = await t), t instanceof Ee)) e.write(t);
    else if (Ti(t)) e.write(t);
    else if (Array.isArray(t)) {
        let a = t.map((n) => Kn((r) => J(r, n)));
        for (let n of a) n && (await n.renderToFinalDestination(e));
    } else if (typeof t == "function") await J(e, t());
    else if (typeof t == "string") e.write(F(ie(t)));
    else if (!(!t && t !== 0))
        if (ir(t)) await t.render(e);
        else if (na(t)) await t.render(e);
        else if (sr(t)) await t.render(e);
        else if (ArrayBuffer.isView(t)) e.write(t);
        else if (
            typeof t == "object" &&
            (Symbol.asyncIterator in t || Symbol.iterator in t)
        )
            for await (let a of t) await J(e, a);
        else e.write(t);
}
function rr(e, t) {
    if (e != null)
        for (let a of Object.keys(e))
            a.startsWith("client:") &&
                console.warn(
                    `You are attempting to render <${t} ${a} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`,
                );
}
function or(e, t, a, n, r = {}) {
    rr(n, t);
    let i = new ft(e, n, r, a);
    return Ni(e, a) && e._metadata.propagators.add(i), i;
}
function sr(e) {
    return typeof e == "object" && !!e[ea];
}
function na(e) {
    return typeof e == "object" && !!e[ta];
}
function re(e, ...t) {
    return new Dt(e, t);
}
async function aa(e, t, a, n, r = !1, i) {
    let o = await ia(e, t, a, n, i);
    if (o instanceof Response) return o;
    let s = "",
        c = !1,
        l = {
            write(u) {
                if (
                    r &&
                    !c &&
                    ((c = !0), !e.partial && !/<!doctype html/i.test(String(u)))
                ) {
                    let p = e.compressHTML
                        ? "<!DOCTYPE html>"
                        : `<!DOCTYPE html>
`;
                    s += p;
                }
                u instanceof Response || (s += $(e, u));
            },
        };
    return await o.render(l), s;
}
async function ur(e, t, a, n, r = !1, i) {
    let o = await ia(e, t, a, n, i);
    if (o instanceof Response) return o;
    let s = !1;
    return (
        r && (await cr(e)),
        new ReadableStream({
            start(c) {
                let l = {
                    write(u) {
                        if (
                            r &&
                            !s &&
                            ((s = !0),
                            !e.partial && !/<!doctype html/i.test(String(u)))
                        ) {
                            let d = e.compressHTML
                                ? "<!DOCTYPE html>"
                                : `<!DOCTYPE html>
`;
                            c.enqueue(Ce.encode(d));
                        }
                        if (u instanceof Response) throw new m({ ...V });
                        let p = ar(e, u);
                        c.enqueue(p);
                    },
                };
                (async () => {
                    try {
                        await o.render(l), c.close();
                    } catch (u) {
                        m.is(u) &&
                            !u.loc &&
                            u.setLocation({ file: i?.component }),
                            setTimeout(() => c.error(u), 0);
                    }
                })();
            },
        })
    );
}
async function ia(e, t, a, n, r) {
    let i = await t(e, a, n);
    if (i instanceof Response) return i;
    if (!na(i))
        throw new m({
            ...Ve,
            message: Ve.message(r?.route, typeof i),
            location: { file: r?.component },
        });
    return Et(i) ? i.content : i;
}
async function cr(e) {
    let t = e._metadata.propagators.values();
    for (;;) {
        let { value: a, done: n } = t.next();
        if (n) break;
        let r = await a.init(e);
        Et(r) && e._metadata.extraHead.push(r.head);
    }
}
function lr(e) {
    return typeof HTMLElement < "u" && HTMLElement.isPrototypeOf(e);
}
async function pr(e, t, a, n) {
    let r = dr(t),
        i = "";
    for (let o in a) i += ` ${o}="${G(await a[o])}"`;
    return F(`<${r}${i}>${await N(e, n?.default)}</${r}>`);
}
function dr(e) {
    let t = customElements.getName(e);
    return (
        t ||
        e.name
            .replace(/^HTML|Element$/g, "")
            .replace(/[A-Z]/g, "-$&")
            .toLowerCase()
            .replace(/^-/, "html-")
    );
}
function fr(e) {
    switch (e?.split(".").pop()) {
        case "svelte":
            return ["@astrojs/svelte"];
        case "vue":
            return ["@astrojs/vue"];
        case "jsx":
        case "tsx":
            return [
                "@astrojs/react",
                "@astrojs/preact",
                "@astrojs/solid-js",
                "@astrojs/vue (jsx)",
            ];
        default:
            return [
                "@astrojs/react",
                "@astrojs/preact",
                "@astrojs/solid-js",
                "@astrojs/vue",
                "@astrojs/svelte",
                "@astrojs/lit",
            ];
    }
}
function Dr(e) {
    return e === tr;
}
function hr(e) {
    return e && e["astro:html"] === !0;
}
function vr(e, t) {
    let a = t ? xr : gr;
    return e.replace(a, "");
}
async function Fr(e, t, a, n, r = {}) {
    if (!a && !n["client:only"])
        throw new Error(`Unable to render ${t} because it is ${a}!
Did you forget to import the component or is it possible there is a typo?`);
    let { renderers: i, clientDirectives: o } = e,
        s = { astroStaticSlot: !0, displayName: t },
        {
            hydration: c,
            isPage: l,
            props: u,
            propsWithoutTransitionAttributes: p,
        } = Mi(n, o),
        d = "",
        h;
    c &&
        ((s.hydrate = c.directive),
        (s.hydrateArgs = c.value),
        (s.componentExport = c.componentExport),
        (s.componentUrl = c.componentUrl));
    let D = fr(s.componentUrl),
        g = i.filter((f) => f.name !== "astro:jsx"),
        { children: v, slotInstructions: b } = await Qn(e, r),
        x;
    if (s.hydrate !== "only") {
        let f = !1;
        try {
            f = a && a[On];
        } catch {}
        if (f) {
            let y = a[On];
            x = i.find(({ name: E }) => E === y);
        }
        if (!x) {
            let y;
            for (let E of i)
                try {
                    if (await E.ssr.check.call({ result: e }, a, u, v)) {
                        x = E;
                        break;
                    }
                } catch (K) {
                    y ??= K;
                }
            if (!x && y) throw y;
        }
        if (!x && typeof HTMLElement == "function" && lr(a)) {
            let y = await pr(e, a, n, r);
            return {
                render(E) {
                    E.write(y);
                },
            };
        }
    } else {
        if (s.hydrateArgs) {
            let f = s.hydrateArgs,
                y = Nn.has(f) ? Nn.get(f) : f;
            x = i.find(({ name: E }) => E === `@astrojs/${y}` || E === y);
        }
        if ((!x && g.length === 1 && (x = g[0]), !x)) {
            let f = s.componentUrl?.split(".").pop();
            x = i.filter(({ name: y }) => y === `@astrojs/${f}` || y === f)[0];
        }
    }
    if (x)
        s.hydrate === "only"
            ? (d = await N(e, r?.fallback))
            : ({ html: d, attrs: h } = await x.ssr.renderToStaticMarkup.call(
                  { result: e },
                  a,
                  p,
                  v,
                  s,
              ));
    else {
        if (s.hydrate === "only")
            throw new m({
                ...Fe,
                message: Fe.message(s.displayName),
                hint: Fe.hint(
                    D.map((f) => f.replace("@astrojs/", "")).join("|"),
                ),
            });
        if (typeof a != "string") {
            let f = g.filter((E) => D.includes(E.name)),
                y = g.length > 1;
            if (f.length === 0)
                throw new m({
                    ...ve,
                    message: ve.message(
                        s.displayName,
                        s?.componentUrl?.split(".").pop(),
                        y,
                        g.length,
                    ),
                    hint: ve.hint(In(D.map((E) => "`" + E + "`"))),
                });
            if (f.length === 1)
                (x = f[0]),
                    ({ html: d, attrs: h } =
                        await x.ssr.renderToStaticMarkup.call(
                            { result: e },
                            a,
                            p,
                            v,
                            s,
                        ));
            else
                throw new Error(`Unable to render ${s.displayName}!

This component likely uses ${In(D)},
but Astro encountered an error during server-side rendering.

Please ensure that ${s.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
        }
    }
    if (x && !x.clientEntrypoint && x.name !== "@astrojs/lit" && s.hydrate)
        throw new m({ ...Ge, message: Ge.message(t, s.hydrate, x.name) });
    if (!d && typeof a == "string") {
        let f = yr(a),
            y = Object.values(v).join(""),
            E = re`<${f}${dt(u)}${F(
                y === "" && Ct.test(f) ? "/>" : `>${y}</${f}>`,
            )}`;
        d = "";
        let K = {
            write(Xt) {
                Xt instanceof Response || (d += $(e, Xt));
            },
        };
        await E.render(K);
    }
    if (!c)
        return {
            render(f) {
                if (b) for (let y of b) f.write(y);
                l || x?.name === "astro:jsx"
                    ? f.write(d)
                    : d &&
                      d.length > 0 &&
                      f.write(F(vr(d, x?.ssr?.supportsAstroStaticSlot ?? !1)));
            },
        };
    let z = Oi(`<!--${s.componentExport.value}:${s.componentUrl}-->
${d}
${Jn(u, s)}`),
        S = await Ii(
            { renderer: x, result: e, astroId: z, props: u, attrs: h },
            s,
        ),
        j = [];
    if (d) {
        if (Object.keys(v).length > 0)
            for (let f of Object.keys(v)) {
                let y = x?.ssr?.supportsAstroStaticSlot
                        ? s.hydrate
                            ? "astro-slot"
                            : "astro-static-slot"
                        : "astro-slot",
                    E = f === "default" ? `<${y}>` : `<${y} name="${f}">`;
                d.includes(E) || j.push(f);
            }
    } else j = Object.keys(v);
    let B =
        j.length > 0
            ? j
                  .map(
                      (f) =>
                          `<template data-astro-template${
                              f !== "default" ? `="${f}"` : ""
                          }>${v[f]}</template>`,
                  )
                  .join("")
            : "";
    return (
        (S.children = `${d ?? ""}${B}`),
        S.children &&
            ((S.props["await-children"] = ""),
            (S.children += "<!--astro:end-->")),
        {
            render(f) {
                if (b) for (let y of b) f.write(y);
                f.write(Wn({ type: "directive", hydration: c })),
                    f.write(F(ae("astro-island", S, !1)));
            },
        }
    );
}
function yr(e) {
    let t = /[&<>'"\s]+/g;
    return t.test(e) ? e.trim().split(t)[0].trim() : e;
}
async function wr(e, t = {}) {
    let a = await N(e, t?.default);
    return {
        render(n) {
            a != null && n.write(a);
        },
    };
}
async function br(e, t, a, n = {}) {
    let { slotInstructions: r, children: i } = await Qn(e, n),
        o = t({ slots: i }),
        s = r ? r.map((c) => $(e, c)).join("") : "";
    return {
        render(c) {
            c.write(F(s + o));
        },
    };
}
function Er(e, t, a, n, r = {}) {
    let i = or(e, t, a, n, r);
    return {
        async render(o) {
            await i.render(o);
        },
    };
}
async function Cr(e, t, a, n, r = {}) {
    return (
        bt(a) && (a = await a),
        Dr(a)
            ? await wr(e, r)
            : ((n = Ar(n)),
              hr(a)
                  ? await br(e, a, n, r)
                  : Xn(a)
                  ? Er(e, t, a, n, r)
                  : await Fr(e, t, a, n, r))
    );
}
function Ar(e) {
    if (e["class:list"] !== void 0) {
        let t = e["class:list"];
        delete e["class:list"],
            (e.class = ot(e.class, t)),
            e.class === "" && delete e.class;
    }
    return e;
}
async function ht(e, t, a, n, r = {}, i = !1, o) {
    let s = "",
        c = !1,
        l = "";
    if (Sr(a)) for (let u of Ae()) l += $(e, u);
    try {
        let u = {
            write(d) {
                if (
                    i &&
                    !c &&
                    ((c = !0), !e.partial && !/<!doctype html/i.test(String(d)))
                ) {
                    let h = e.compressHTML
                        ? "<!DOCTYPE html>"
                        : `<!DOCTYPE html>
`;
                    s += h + l;
                }
                d instanceof Response || (s += $(e, d));
            },
        };
        await (await Cr(e, t, a, n, r)).render(u);
    } catch (u) {
        throw (m.is(u) && !u.loc && u.setLocation({ file: o?.component }), u);
    }
    return s;
}
function Sr(e) {
    return !!e?.[mr];
}
async function R(e, t) {
    switch (!0) {
        case t instanceof _:
            return t.toString().trim() === "" ? "" : t;
        case typeof t == "string":
            return F(ie(t));
        case typeof t == "function":
            return t;
        case !t && t !== 0:
            return "";
        case Array.isArray(t):
            return F((await Promise.all(t.map((n) => R(e, n)))).join(""));
    }
    let a;
    return (
        t.props
            ? t.props[I.symbol]
                ? (a = t.props[I.symbol])
                : (a = new I(t))
            : (a = new I(t)),
        xt(e, t, a)
    );
}
async function xt(e, t, a) {
    if (Tn(t)) {
        switch (!0) {
            case !t.type:
                throw new Error(`Unable to render ${e.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
            case t.type === Symbol.for("astro:fragment"):
                return R(e, t.props.children);
            case t.type.isAstroComponentFactory: {
                let n = {},
                    r = {};
                for (let [s, c] of Object.entries(t.props ?? {}))
                    s === "children" || (c && typeof c == "object" && c.$$slot)
                        ? (r[s === "children" ? "default" : s] = () => R(e, c))
                        : (n[s] = c);
                let i = await aa(e, t.type, n, r);
                if (i instanceof Response) throw i;
                return F(i);
            }
            case !t.type && t.type !== 0:
                return "";
            case typeof t.type == "string" && t.type !== zn:
                return F(await Br(e, t.type, t.props ?? {}));
        }
        if (t.type) {
            let n = function (u) {
                if (Array.isArray(u)) return u.map((p) => n(p));
                if (!Tn(u)) {
                    o.default.push(u);
                    return;
                }
                if ("slot" in u.props) {
                    (o[u.props.slot] = [...(o[u.props.slot] ?? []), u]),
                        delete u.props.slot;
                    return;
                }
                o.default.push(u);
            };
            if (
                (typeof t.type == "function" &&
                    t.type["astro:renderer"] &&
                    a.increment(),
                typeof t.type == "function" && t.props["server:root"])
            ) {
                let u = await t.type(t.props ?? {});
                return await R(e, u);
            }
            if (typeof t.type == "function")
                if (a.haveNoTried() || a.isCompleted()) {
                    kr();
                    try {
                        let u = await t.type(t.props ?? {}),
                            p;
                        if (u?.[Un]) return (p = await xt(e, u, a)), p;
                        if (!u) return (p = await xt(e, u, a)), p;
                    } catch (u) {
                        if (a.isCompleted()) throw u;
                        a.increment();
                    } finally {
                        Rr();
                    }
                } else a.increment();
            let { children: r = null, ...i } = t.props ?? {},
                o = { default: [] };
            n(r);
            for (let [u, p] of Object.entries(i))
                p.$$slot && ((o[u] = p), delete i[u]);
            let s = [],
                c = {};
            for (let [u, p] of Object.entries(o))
                s.push(
                    R(e, p).then((d) => {
                        d.toString().trim().length !== 0 && (c[u] = () => d);
                    }),
                );
            await Promise.all(s), (i[I.symbol] = a);
            let l;
            return (
                t.type === zn && t.props["client:only"]
                    ? (l = await ht(
                          e,
                          t.props["client:display-name"] ?? "",
                          null,
                          i,
                          c,
                      ))
                    : (l = await ht(
                          e,
                          typeof t.type == "function" ? t.type.name : t.type,
                          t.type,
                          i,
                          c,
                      )),
                F(l)
            );
        }
    }
    return F(`${t}`);
}
async function Br(e, t, { children: a, ...n }) {
    return F(
        `<${t}${P(n)}${F(
            (a == null || a == "") && Ct.test(t)
                ? "/>"
                : `>${a == null ? "" : await R(e, jr(t, a))}</${t}>`,
        )}`,
    );
}
function jr(e, t) {
    return typeof t == "string" && (e === "style" || e === "script") ? F(t) : t;
}
function kr() {
    if ((St++, !gt)) {
        gt = console.error;
        try {
            console.error = $r;
        } catch {}
    }
}
function Rr() {
    St--;
}
function $r(e, ...t) {
    (St > 0 &&
        typeof e == "string" &&
        e.includes("Warning: Invalid hook call.") &&
        e.includes("https://reactjs.org/link/invalid-hook-call")) ||
        gt(e, ...t);
}
async function ra(e, t, a, n, r, i) {
    if (!Xn(t)) {
        e._metadata.headInTree =
            e.componentMetadata.get(t.moduleId)?.containsHead ?? !1;
        let u = { ...(a ?? {}), "server:root": !0 },
            p = await ht(e, t.name, t, u, null, !0, i),
            d = Ce.encode(p);
        return new Response(d, {
            headers: new Headers([
                ["Content-Type", "text/html; charset=utf-8"],
                ["Content-Length", d.byteLength.toString()],
            ]),
        });
    }
    e._metadata.headInTree =
        e.componentMetadata.get(t.moduleId)?.containsHead ?? !1;
    let o;
    if (
        (r
            ? (o = await ur(e, t, a, n, !0, i))
            : (o = await aa(e, t, a, n, !0, i)),
        o instanceof Response)
    )
        return o;
    let s = e.response,
        c = new Headers(s.headers);
    return (
        !r &&
            typeof o == "string" &&
            ((o = Ce.encode(o)),
            c.set("Content-Length", o.byteLength.toString())),
        i?.component.endsWith(".md") &&
            c.set("Content-Type", "text/html; charset=utf-8"),
        new Response(o, { ...s, headers: c })
    );
}
function P(e = {}, t, { class: a } = {}) {
    let n = "";
    a &&
        (typeof e.class < "u"
            ? (e.class += ` ${a}`)
            : typeof e["class:list"] < "u"
            ? (e["class:list"] = [e["class:list"], a])
            : (e.class = a));
    for (let [r, i] of Object.entries(e)) n += O(i, r, !0);
    return F(n);
}
var Ft,
    ie,
    lt,
    _,
    F,
    Un,
    qn,
    C,
    Yn,
    pt,
    ut,
    zi,
    Hi,
    Ui,
    Ct,
    Gi,
    Ji,
    Yi,
    Xi,
    Ki,
    G,
    Zi,
    Mn,
    ct,
    mt,
    Ee,
    tr,
    On,
    Ce,
    nr,
    ea,
    ft,
    ta,
    Dt,
    mr,
    Nn,
    gr,
    xr,
    zn,
    I,
    gt,
    St,
    Se = A(() => {
        "use strict";
        te();
        ne();
        Pn();
        Ft = "3.5.3";
        (ie = $n), (lt = class extends Uint8Array {});
        Object.defineProperty(lt.prototype, Symbol.toStringTag, {
            get() {
                return "HTMLBytes";
            },
        });
        (_ = class extends String {
            get [Symbol.toStringTag]() {
                return "HTMLString";
            }
        }),
            (F = (e) =>
                e instanceof _ ? e : typeof e == "string" ? new _(e) : e);
        Un = "astro:jsx";
        qn = Symbol.for("astro:render");
        C = {
            Value: 0,
            JSON: 1,
            RegExp: 2,
            Date: 3,
            Map: 4,
            Set: 5,
            BigInt: 6,
            URL: 7,
            Uint8Array: 8,
            Uint16Array: 9,
            Uint32Array: 10,
        };
        Yn = Object.freeze([
            "data-astro-transition-scope",
            "data-astro-transition-persist",
        ]);
        (pt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"),
            (ut = pt.length);
        zi = Symbol.for("astro.headAndContent");
        (Hi =
            '(()=>{var b=Object.defineProperty;var f=(c,o,i)=>o in c?b(c,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[o]=i;var l=(c,o,i)=>(f(c,typeof o!="symbol"?o+"":o,i),i);var p;{let c={0:t=>m(t),1:t=>i(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(i(t)),5:t=>new Set(i(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let[e,r]=t;return e in c?c[e](r):void 0},i=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,r])=>[e,o(r)]));customElements.get("astro-island")||customElements.define("astro-island",(p=class extends HTMLElement{constructor(){super(...arguments);l(this,"Component");l(this,"hydrator");l(this,"hydrate",async()=>{var d;if(!this.hydrator||!this.isConnected)return;let e=(d=this.parentElement)==null?void 0:d.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),a={},h=this.querySelectorAll("template[data-astro-template]");for(let n of h){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("data-astro-template")||"default"]=n.innerHTML,n.remove())}for(let n of r){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("name")||"default"]=n.innerHTML)}let u;try{u=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(n){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),n),n}await this.hydrator(this)(this.Component,u,a,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});l(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),r.disconnect(),this.childrenConnectedCallback()},r=new MutationObserver(()=>{var a;((a=this.lastChild)==null?void 0:a.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});r.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(`astro:${r}`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let a=this.getAttribute("renderer-url"),[h,{default:u}]=await Promise.all([import(this.getAttribute("component-url")),a?import(a):()=>()=>{}]),d=this.getAttribute("component-export")||"default";if(!d.includes("."))this.Component=h[d];else{this.Component=h;for(let n of d.split("."))this.Component=this.Component[n]}return this.hydrator=u,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},l(p,"observedAttributes",["props"]),p))}})();'),
            (Ui =
                "<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>");
        (Ct =
            /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i),
            (Gi =
                /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i),
            (Ji = /^(contenteditable|draggable|spellcheck|value)$/i),
            (Yi =
                /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i),
            (Xi = new Set(["set:html", "set:text"])),
            (Ki = (e) =>
                e
                    .trim()
                    .replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (t, a) =>
                        /[^\w]|\s/.test(t) ? "" : a === 0 ? t : t.toUpperCase(),
                    )),
            (G = (e, t = !0) =>
                t
                    ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;")
                    : e),
            (Zi = (e) =>
                e.toLowerCase() === e
                    ? e
                    : e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)),
            (Mn = (e) =>
                Object.entries(e)
                    .filter(
                        ([t, a]) =>
                            (typeof a == "string" && a.trim()) ||
                            typeof a == "number",
                    )
                    .map(([t, a]) =>
                        t[0] !== "-" && t[1] !== "-"
                            ? `${Zi(t)}:${a}`
                            : `${t}:${a}`,
                    )
                    .join(";"));
        ct = (e, t, a) => {
            let n = JSON.stringify(e.props),
                r = e.children;
            return (
                t ===
                a.findIndex(
                    (i) => JSON.stringify(i.props) === n && i.children == r,
                )
            );
        };
        (mt = Symbol.for("astro:slot-string")),
            (Ee = class extends _ {
                instructions;
                [mt];
                constructor(t, a) {
                    super(t), (this.instructions = a), (this[mt] = !0);
                }
            });
        (tr = Symbol.for("astro:fragment")),
            (On = Symbol.for("astro:renderer")),
            (Ce = new TextEncoder()),
            (nr = new TextDecoder());
        (ea = Symbol.for("astro.componentInstance")),
            (ft = class {
                [ea] = !0;
                result;
                props;
                slotValues;
                factory;
                returnValue;
                constructor(t, a, n, r) {
                    (this.result = t),
                        (this.props = a),
                        (this.factory = r),
                        (this.slotValues = {});
                    for (let i in n) {
                        let o = !1,
                            s = n[i](t);
                        this.slotValues[i] = () =>
                            o ? n[i](t) : ((o = !0), s);
                    }
                }
                async init(t) {
                    return this.returnValue !== void 0
                        ? this.returnValue
                        : ((this.returnValue = this.factory(
                              t,
                              this.props,
                              this.slotValues,
                          )),
                          this.returnValue);
                }
                async render(t) {
                    this.returnValue === void 0 &&
                        (await this.init(this.result));
                    let a = this.returnValue;
                    bt(a) && (a = await a),
                        Et(a) ? await a.content.render(t) : await J(t, a);
                }
            });
        (ta = Symbol.for("astro.renderTemplateResult")),
            (Dt = class {
                [ta] = !0;
                htmlParts;
                expressions;
                error;
                constructor(t, a) {
                    (this.htmlParts = t),
                        (this.error = void 0),
                        (this.expressions = a.map((n) =>
                            bt(n)
                                ? Promise.resolve(n).catch((r) => {
                                      if (!this.error)
                                          throw ((this.error = r), r);
                                  })
                                : n,
                        ));
                }
                async render(t) {
                    let a = this.expressions.map((n) =>
                        Kn((r) => {
                            if (n || n === 0) return J(r, n);
                        }),
                    );
                    for (let n = 0; n < this.htmlParts.length; n++) {
                        let r = this.htmlParts[n],
                            i = a[n];
                        t.write(F(r)),
                            i && (await i.renderToFinalDestination(t));
                    }
                }
            });
        (mr = Symbol.for("astro.needsHeadRendering")),
            (Nn = new Map([["solid", "solid-js"]]));
        (gr = /\<\/?astro-slot\b[^>]*>/g),
            (xr = /\<\/?astro-static-slot\b[^>]*>/g);
        (zn = "astro-client-only"),
            (I = class {
                constructor(t) {
                    (this.vnode = t), (this.count = 0);
                }
                count;
                increment() {
                    this.count++;
                }
                haveNoTried() {
                    return this.count === 0;
                }
                isCompleted() {
                    return this.count > 2;
                }
                static symbol = Symbol("astro:jsx:skip");
            }),
            (St = 0);
    });
function no(e) {
    return e.render && e.$$render;
}
function ao(e) {
    return e.astroStaticSlot ? !!e.hydrate : !0;
}
async function io(e, t, a, n) {
    let r = ao(n) ? "astro-slot" : "astro-static-slot",
        i = {};
    for (let [s, c] of Object.entries(a))
        i[s] = () =>
            `<${r}${s === "default" ? "" : ` name="${s}"`}>${c}</${r}>`;
    let { html: o } = e.render(t, { $$slots: i });
    return { html: o };
}
var ro,
    T,
    pe = A(() => {
        "use strict";
        (ro = {
            check: no,
            renderToStaticMarkup: io,
            supportsAstroStaticSlot: !0,
        }),
            (T = [
                Object.assign(
                    {
                        name: "@astrojs/svelte",
                        clientEntrypoint: "@astrojs/svelte/client.js",
                        serverEntrypoint: "@astrojs/svelte/server.js",
                    },
                    { ssr: ro },
                ),
            ]);
    });
var X,
    Re = A(() => {
        "use strict";
        X = void 0;
    });
var Sa = L((Gs, Aa) => {
    "use strict";
    var oo = qe();
    Aa.exports = new oo(We());
});
var ja = {};
Z(ja, { GET: () => Do });
async function fo(e) {
    try {
        let t = await fetch(e);
        return t.ok ? await t.arrayBuffer() : void 0;
    } catch {
        return;
    }
}
var Ba,
    so,
    uo,
    co,
    lo,
    po,
    mo,
    $e,
    zt,
    Do,
    ka = A(() => {
        "use strict";
        ee();
        Se();
        ne();
        Ba = Q(Sa(), 1);
        te();
        (so = (e) => {
            let t = e.length,
                a = 0,
                n = 0,
                r = 8997,
                i = 0,
                o = 33826,
                s = 0,
                c = 40164,
                l = 0,
                u = 52210;
            for (; a < t; )
                (r ^= e.charCodeAt(a++)),
                    (n = r * 435),
                    (i = o * 435),
                    (s = c * 435),
                    (l = u * 435),
                    (s += r << 8),
                    (l += o << 8),
                    (i += n >>> 16),
                    (r = n & 65535),
                    (s += i >>> 16),
                    (o = i & 65535),
                    (u = (l + (s >>> 16)) & 65535),
                    (c = s & 65535);
            return (
                (u & 15) * 281474976710656 +
                c * 4294967296 +
                o * 65536 +
                (r ^ (u >> 4))
            );
        }),
            (uo = (e, t = !1) =>
                (t ? 'W/"' : '"') +
                so(e).toString(36) +
                e.length.toString(36) +
                '"'),
            (co = yt()),
            (lo = vt(
                async (e, t, a) => {
                    let n = e.createAstro(co, t, a);
                    n.self = lo;
                    let r = n.props;
                    if (r.alt === void 0 || r.alt === null) throw new m(tt);
                    typeof r.width == "string" && (r.width = parseInt(r.width)),
                        typeof r.height == "string" &&
                            (r.height = parseInt(r.height));
                    let i = await zt(r),
                        o = {};
                    return (
                        i.srcSet.values.length > 0 &&
                            (o.srcset = i.srcSet.attribute),
                        re`${Ae()}<img${O(i.src, "src")}${P(o)}${P(
                            i.attributes,
                        )}>`
                    );
                },
                "/home/haln/codes/portfolio/node_modules/astro/components/Image.astro",
                void 0,
            )),
            (po = yt()),
            (mo = vt(
                async (e, t, a) => {
                    let n = e.createAstro(po, t, a);
                    n.self = mo;
                    let r = ["webp"],
                        i = "png",
                        o = ["gif", "svg", "jpg", "jpeg"],
                        {
                            formats: s = r,
                            pictureAttributes: c = {},
                            fallbackFormat: l,
                            ...u
                        } = n.props;
                    if (u.alt === void 0 || u.alt === null) throw new m(tt);
                    let p = await Promise.all(
                            s.map(
                                async (v) =>
                                    await zt({
                                        ...u,
                                        format: v,
                                        widths: u.widths,
                                        densities: u.densities,
                                    }),
                            ),
                        ),
                        d = l ?? i;
                    !l &&
                        M(u.src) &&
                        o.includes(u.src.format) &&
                        (d = u.src.format);
                    let h = await zt({
                            ...u,
                            format: d,
                            widths: u.widths,
                            densities: u.densities,
                        }),
                        D = {},
                        g = {};
                    return (
                        u.sizes && (g.sizes = u.sizes),
                        h.srcSet.values.length > 0 &&
                            (D.srcset = h.srcSet.attribute),
                        re`${Ae()}<picture${P(c)}>${Object.entries(p).map(
                            ([v, b]) => {
                                let x =
                                    u.densities || (!u.densities && !u.widths)
                                        ? `${b.src}${
                                              b.srcSet.values.length > 0
                                                  ? ", " + b.srcSet.attribute
                                                  : ""
                                          }`
                                        : b.srcSet.attribute;
                                return re`<source${O(x, "srcset")}${O(
                                    "image/" + b.options.format,
                                    "type",
                                )}${P(g)}>`;
                            },
                        )}<img${O(h.src, "src")}${P(D)}${P(
                            h.attributes,
                        )}></picture>`
                    );
                },
                "/home/haln/codes/portfolio/node_modules/astro/components/Picture.astro",
                void 0,
            )),
            ($e = {
                service: {
                    entrypoint: "astro/assets/services/noop",
                    config: {},
                },
                domains: [],
                remotePatterns: [],
            });
        new URL("file:///home/haln/codes/portfolio/dist/");
        zt = async (e) => await kn(e, $e);
        Do = async ({ request: e }) => {
            try {
                let t = await rt();
                if (!("transform" in t))
                    throw new Error(
                        "Configured image service is not a local service",
                    );
                let a = new URL(e.url),
                    n = await t.parseURL(a, $e);
                if (!n?.src)
                    throw new Error(
                        "Incorrect transform returned by `parseURL`",
                    );
                let r,
                    i = U(n.src) ? new URL(n.src) : new URL(n.src, a.origin);
                if (U(n.src) && it(n.src, $e) === !1)
                    return new Response("Forbidden", { status: 403 });
                if (((r = await fo(i)), !r))
                    return new Response("Not Found", { status: 404 });
                let { data: o, format: s } = await t.transform(
                    new Uint8Array(r),
                    n,
                    $e,
                );
                return new Response(o, {
                    status: 200,
                    headers: {
                        "Content-Type": Ba.default.getType(s) ?? `image/${s}`,
                        "Cache-Control": "public, max-age=31536000",
                        ETag: uo(o.toString()),
                        Date: new Date().toUTCString(),
                    },
                });
            } catch (t) {
                return new Response(`Server Error: ${t}`, { status: 500 });
            }
        };
    });
var Ra = {};
Z(Ra, { onRequest: () => X, page: () => ho, renderers: () => T });
var ho,
    $a = A(() => {
        "use strict";
        pe();
        Re();
        ho = () => Promise.resolve().then(() => (ka(), ja));
    });
var Ht = {};
Z(Ht, { i: () => go, p: () => xo });
var Pa,
    go,
    xo,
    Ut = A(() => {
        "use strict";
        (Pa = () => {}), (go = Pa), (xo = Pa);
    });
var Ta = {};
Z(Ta, { onRequest: () => X, page: () => vo, renderers: () => T });
var vo,
    La = A(() => {
        "use strict";
        pe();
        Re();
        vo = () =>
            Promise.resolve()
                .then(() => (Ut(), Ht))
                .then((e) => e.i);
    });
var Ma = {};
Z(Ma, { onRequest: () => X, page: () => Fo, renderers: () => T });
var Fo,
    Ia = A(() => {
        "use strict";
        pe();
        Re();
        Fo = () =>
            Promise.resolve()
                .then(() => (Ut(), Ht))
                .then((e) => e.p);
    });
ee();
var ru = Q(Oe(), 1);
ee();
var oe = Q(Oe(), 1);
var Ne,
    Kt,
    Zt,
    Qt,
    en = !0;
typeof process < "u" &&
    (({
        FORCE_COLOR: Ne,
        NODE_DISABLE_COLORS: Kt,
        NO_COLOR: Zt,
        TERM: Qt,
    } = process.env || {}),
    (en = process.stdout && process.stdout.isTTY));
var ci = {
    enabled:
        !Kt &&
        Zt == null &&
        Qt !== "dumb" &&
        ((Ne != null && Ne !== "0") || en),
};
function w(e, t) {
    let a = new RegExp(`\\x1b\\[${t}m`, "g"),
        n = `\x1B[${e}m`,
        r = `\x1B[${t}m`;
    return function (i) {
        return !ci.enabled || i == null
            ? i
            : n + (~("" + i).indexOf(r) ? i.replace(a, r + n) : i) + r;
    };
}
var tn = w(0, 0),
    q = w(1, 22),
    nn = w(2, 22),
    Vo = w(3, 23),
    Go = w(4, 24),
    Jo = w(7, 27),
    Yo = w(8, 28),
    Xo = w(9, 29),
    Ko = w(30, 39),
    an = w(31, 39),
    Zo = w(32, 39),
    ze = w(33, 39),
    Qo = w(34, 39),
    es = w(35, 39),
    rn = w(36, 39),
    ts = w(37, 39),
    ns = w(90, 39),
    as = w(90, 39),
    is = w(40, 49),
    rs = w(41, 49),
    os = w(42, 49),
    ss = w(43, 49),
    us = w(44, 49),
    cs = w(45, 49),
    ls = w(46, 49),
    ps = w(47, 49);
function He({ onlyFirst: e = !1 } = {}) {
    let t = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
}
var Ds = He();
var li = Q(sn(), 1);
var pa = Q(mn(), 1);
te();
Se();
ne();
function Pr(e) {
    for (var t = [], a = 0; a < e.length; ) {
        var n = e[a];
        if (n === "*" || n === "+" || n === "?") {
            t.push({ type: "MODIFIER", index: a, value: e[a++] });
            continue;
        }
        if (n === "\\") {
            t.push({ type: "ESCAPED_CHAR", index: a++, value: e[a++] });
            continue;
        }
        if (n === "{") {
            t.push({ type: "OPEN", index: a, value: e[a++] });
            continue;
        }
        if (n === "}") {
            t.push({ type: "CLOSE", index: a, value: e[a++] });
            continue;
        }
        if (n === ":") {
            for (var r = "", i = a + 1; i < e.length; ) {
                var o = e.charCodeAt(i);
                if (
                    (o >= 48 && o <= 57) ||
                    (o >= 65 && o <= 90) ||
                    (o >= 97 && o <= 122) ||
                    o === 95
                ) {
                    r += e[i++];
                    continue;
                }
                break;
            }
            if (!r) throw new TypeError("Missing parameter name at ".concat(a));
            t.push({ type: "NAME", index: a, value: r }), (a = i);
            continue;
        }
        if (n === "(") {
            var s = 1,
                c = "",
                i = a + 1;
            if (e[i] === "?")
                throw new TypeError(
                    'Pattern cannot start with "?" at '.concat(i),
                );
            for (; i < e.length; ) {
                if (e[i] === "\\") {
                    c += e[i++] + e[i++];
                    continue;
                }
                if (e[i] === ")") {
                    if ((s--, s === 0)) {
                        i++;
                        break;
                    }
                } else if (e[i] === "(" && (s++, e[i + 1] !== "?"))
                    throw new TypeError(
                        "Capturing groups are not allowed at ".concat(i),
                    );
                c += e[i++];
            }
            if (s) throw new TypeError("Unbalanced pattern at ".concat(a));
            if (!c) throw new TypeError("Missing pattern at ".concat(a));
            t.push({ type: "PATTERN", index: a, value: c }), (a = i);
            continue;
        }
        t.push({ type: "CHAR", index: a, value: e[a++] });
    }
    return t.push({ type: "END", index: a, value: "" }), t;
}
function Tr(e, t) {
    t === void 0 && (t = {});
    for (
        var a = Pr(e),
            n = t.prefixes,
            r = n === void 0 ? "./" : n,
            i = "[^".concat(Mr(t.delimiter || "/#?"), "]+?"),
            o = [],
            s = 0,
            c = 0,
            l = "",
            u = function (B) {
                if (c < a.length && a[c].type === B) return a[c++].value;
            },
            p = function (B) {
                var f = u(B);
                if (f !== void 0) return f;
                var y = a[c],
                    E = y.type,
                    K = y.index;
                throw new TypeError(
                    "Unexpected "
                        .concat(E, " at ")
                        .concat(K, ", expected ")
                        .concat(B),
                );
            },
            d = function () {
                for (var B = "", f; (f = u("CHAR") || u("ESCAPED_CHAR")); )
                    B += f;
                return B;
            };
        c < a.length;

    ) {
        var h = u("CHAR"),
            D = u("NAME"),
            g = u("PATTERN");
        if (D || g) {
            var v = h || "";
            r.indexOf(v) === -1 && ((l += v), (v = "")),
                l && (o.push(l), (l = "")),
                o.push({
                    name: D || s++,
                    prefix: v,
                    suffix: "",
                    pattern: g || i,
                    modifier: u("MODIFIER") || "",
                });
            continue;
        }
        var b = h || u("ESCAPED_CHAR");
        if (b) {
            l += b;
            continue;
        }
        l && (o.push(l), (l = ""));
        var x = u("OPEN");
        if (x) {
            var v = d(),
                z = u("NAME") || "",
                S = u("PATTERN") || "",
                j = d();
            p("CLOSE"),
                o.push({
                    name: z || (S ? s++ : ""),
                    pattern: z && !S ? i : S,
                    prefix: v,
                    suffix: j,
                    modifier: u("MODIFIER") || "",
                });
            continue;
        }
        p("END");
    }
    return o;
}
function oa(e, t) {
    return Lr(Tr(e, t), t);
}
function Lr(e, t) {
    t === void 0 && (t = {});
    var a = Ir(t),
        n = t.encode,
        r =
            n === void 0
                ? function (c) {
                      return c;
                  }
                : n,
        i = t.validate,
        o = i === void 0 ? !0 : i,
        s = e.map(function (c) {
            if (typeof c == "object")
                return new RegExp("^(?:".concat(c.pattern, ")$"), a);
        });
    return function (c) {
        for (var l = "", u = 0; u < e.length; u++) {
            var p = e[u];
            if (typeof p == "string") {
                l += p;
                continue;
            }
            var d = c ? c[p.name] : void 0,
                h = p.modifier === "?" || p.modifier === "*",
                D = p.modifier === "*" || p.modifier === "+";
            if (Array.isArray(d)) {
                if (!D)
                    throw new TypeError(
                        'Expected "'.concat(
                            p.name,
                            '" to not repeat, but got an array',
                        ),
                    );
                if (d.length === 0) {
                    if (h) continue;
                    throw new TypeError(
                        'Expected "'.concat(p.name, '" to not be empty'),
                    );
                }
                for (var g = 0; g < d.length; g++) {
                    var v = r(d[g], p);
                    if (o && !s[u].test(v))
                        throw new TypeError(
                            'Expected all "'
                                .concat(p.name, '" to match "')
                                .concat(p.pattern, '", but got "')
                                .concat(v, '"'),
                        );
                    l += p.prefix + v + p.suffix;
                }
                continue;
            }
            if (typeof d == "string" || typeof d == "number") {
                var v = r(String(d), p);
                if (o && !s[u].test(v))
                    throw new TypeError(
                        'Expected "'
                            .concat(p.name, '" to match "')
                            .concat(p.pattern, '", but got "')
                            .concat(v, '"'),
                    );
                l += p.prefix + v + p.suffix;
                continue;
            }
            if (!h) {
                var b = D ? "an array" : "a string";
                throw new TypeError(
                    'Expected "'.concat(p.name, '" to be ').concat(b),
                );
            }
        }
        return l;
    };
}
function Mr(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ir(e) {
    return e && e.sensitive ? "" : "i";
}
var _r = new Date(0),
    sa = "deleted",
    Or = Symbol.for("astro.responseSent"),
    Be = class {
        constructor(t) {
            this.value = t;
        }
        json() {
            if (this.value === void 0)
                throw new Error("Cannot convert undefined to an object.");
            return JSON.parse(this.value);
        }
        number() {
            return Number(this.value);
        }
        boolean() {
            return this.value === "false" || this.value === "0"
                ? !1
                : !!this.value;
        }
    },
    se = class {
        #e;
        #t;
        #n;
        constructor(t) {
            (this.#e = t), (this.#t = null), (this.#n = null);
        }
        delete(t, a) {
            let n = { expires: _r };
            a?.domain && (n.domain = a.domain),
                a?.path && (n.path = a.path),
                this.#r().set(t, [sa, (0, oe.serialize)(t, sa, n), !1]);
        }
        get(t) {
            if (this.#n?.has(t)) {
                let [n, , r] = this.#n.get(t);
                return r ? new Be(n) : void 0;
            }
            let a = this.#i();
            if (t in a) {
                let n = a[t];
                return new Be(n);
            }
        }
        has(t) {
            if (this.#n?.has(t)) {
                let [, , n] = this.#n.get(t);
                return n;
            }
            return !!this.#i()[t];
        }
        set(t, a, n) {
            let r;
            if (typeof a == "string") r = a;
            else {
                let o = a.toString();
                o === Object.prototype.toString.call(a)
                    ? (r = JSON.stringify(a))
                    : (r = o);
            }
            let i = {};
            if (
                (n && Object.assign(i, n),
                this.#r().set(t, [r, (0, oe.serialize)(t, r, i), !0]),
                this.#e[Or])
            )
                throw new m({ ...V });
        }
        *headers() {
            if (this.#n != null) for (let [, t] of this.#n) yield t[1];
        }
        #i() {
            return this.#t || this.#a(), this.#t || (this.#t = {}), this.#t;
        }
        #r() {
            return this.#n || (this.#n = new Map()), this.#n;
        }
        #a() {
            let t = this.#e.headers.get("cookie");
            t && (this.#t = (0, oe.parse)(t));
        }
    },
    $t = Symbol.for("astro.cookies");
function ue(e, t) {
    Reflect.set(e, $t, t);
}
function Nr(e) {
    return Reflect.has(e, $t);
}
function zr(e) {
    let t = Reflect.get(e, $t);
    if (t != null) return t;
}
function* da(e) {
    let t = zr(e);
    if (!t) return [];
    for (let a of t.headers()) yield a;
    return [];
}
var ma = new Intl.DateTimeFormat([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }),
    ce = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function Pt(e, t, a, n) {
    let r = e.level,
        i = e.dest,
        o = { label: a, level: t, message: n };
    ce[r] > ce[t] || i.write(o);
}
function fa(e, t, a) {
    return Pt(e, "info", t, a);
}
function Da(e, t, a) {
    return Pt(e, "warn", t, a);
}
function ha(e, t, a) {
    return Pt(e, "error", t, a);
}
function ga(...e) {
    "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...e);
}
if (typeof process < "u") {
    let e = process;
    "argv" in e &&
        Array.isArray(e.argv) &&
        (e.argv.includes("--verbose") || e.argv.includes("--silent"));
}
var je = class {
        options;
        constructor(t) {
            this.options = t;
        }
        info(t, a) {
            fa(this.options, t, a);
        }
        warn(t, a) {
            Da(this.options, t, a);
        }
        error(t, a) {
            ha(this.options, t, a);
        }
        debug(t, a, ...n) {
            ga(this.options, t, a, n);
        }
        level() {
            return this.options.level;
        }
        forkIntegrationLogger(t) {
            return new le(this.options, t);
        }
    },
    le = class e {
        options;
        label;
        constructor(t, a) {
            (this.options = t), (this.label = a);
        }
        fork(t) {
            return new e(this.options, t);
        }
        info(t) {
            fa(this.options, this.label, t);
        }
        warn(t) {
            Da(this.options, this.label, t);
        }
        error(t) {
            ha(this.options, this.label, t);
        }
        debug(t) {
            ga(this.options, this.label, t);
        }
    };
async function Tt(e, t, a, n) {
    let r = !1,
        i,
        s = t(a, async () => ((r = !0), (i = n()), i));
    return await Promise.resolve(s).then(async (c) => {
        if (
            (Hr(c) &&
                e.warn(
                    "middleware",
                    `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${q("Response")} objects.`,
                ),
            r)
        )
            if (typeof c < "u") {
                if (!(c instanceof Response)) throw new m(we);
                return ua(a, c);
            } else {
                if (i) return i;
                throw new m(we);
            }
        else {
            if (typeof c > "u") throw new m(An);
            if (c instanceof Response) return ua(a, c);
            throw new m(we);
        }
    });
}
function ua(e, t) {
    return e.cookies !== void 0 && !Nr(t) && ue(t, e.cookies), t;
}
function Hr(e) {
    return (
        !(e instanceof Response) &&
        typeof e == "object" &&
        typeof e.body == "string"
    );
}
function Y(e) {
    return e.replaceAll("_", "-").toLowerCase();
}
function Lt(e) {
    return e?.type === "redirect";
}
function Mt(e) {
    return e?.type === "fallback";
}
function xa(e, t) {
    let a = e.redirectRoute,
        n = e.redirect;
    return typeof a < "u"
        ? a?.generate(t) || a?.pathname || "/"
        : typeof n == "string"
        ? n
        : typeof n > "u"
        ? "/"
        : n.destination;
}
function va(e, t = "GET") {
    let a = e.redirectRoute;
    return typeof a?.redirect == "object"
        ? a.redirect.status
        : t !== "GET"
        ? 308
        : 301;
}
var Ur = ["string", "number", "undefined"];
function qr([e, t], a) {
    if (!Ur.includes(typeof t))
        throw new m({
            ...Xe,
            message: Xe.message(e, t, typeof t),
            location: { file: a },
        });
}
function Wr(e, { ssr: t, route: a }) {
    if ((!t || a.prerender) && !e.getStaticPaths)
        throw new m({ ...Cn, location: { file: a.component } });
}
function Vr(e, t, a) {
    if (!Array.isArray(e))
        throw new m({
            ...Ye,
            message: Ye.message(typeof e),
            location: { file: a.component },
        });
    e.forEach((n) => {
        if ((typeof n == "object" && Array.isArray(n)) || n === null)
            throw new m({
                ...Je,
                message: Je.message(Array.isArray(n) ? "array" : typeof n),
            });
        if (
            n.params === void 0 ||
            n.params === null ||
            (n.params && Object.keys(n.params).length === 0)
        )
            throw new m({ ...En, location: { file: a.component } });
        for (let [r, i] of Object.entries(n.params))
            typeof i > "u" ||
                typeof i == "string" ||
                typeof i == "number" ||
                t.warn(
                    "getStaticPaths",
                    `invalid path param: ${r}. A string, number or undefined value was expected, but got \`${JSON.stringify(
                        i,
                    )}\`.`,
                ),
                typeof i == "string" &&
                    i === "" &&
                    t.warn(
                        "getStaticPaths",
                        `invalid path param: ${r}. \`undefined\` expected for an optional param, but got empty string.`,
                    );
    });
}
function Gr(e) {
    return (a) => {
        let n = {};
        return (
            e.forEach((r, i) => {
                r.startsWith("...")
                    ? (n[r.slice(3)] = a[i + 1]
                          ? decodeURIComponent(a[i + 1])
                          : void 0)
                    : (n[r] = decodeURIComponent(a[i + 1]));
            }),
            n
        );
    };
}
function Fa(e, t) {
    let a = Object.entries(e).reduce((n, r) => {
        qr(r, t.component);
        let [i, o] = r;
        return (
            o !== void 0 &&
                (n[i] = typeof o == "string" ? Me(o) : o.toString()),
            n
        );
    }, {});
    return JSON.stringify(t.generate(a));
}
function Jr(e) {
    return function (a, n = {}) {
        let { pageSize: r, params: i, props: o } = n,
            s = r || 10,
            c = "page",
            l = i || {},
            u = o || {},
            p;
        if (e.params.includes(`...${c}`)) p = !1;
        else if (e.params.includes(`${c}`)) p = !0;
        else throw new m({ ...et, message: et.message(c) });
        let d = Math.max(1, Math.ceil(a.length / s));
        return [...Array(d).keys()].map((D) => {
            let g = D + 1,
                v = s === 1 / 0 ? 0 : (g - 1) * s,
                b = Math.min(v + s, a.length),
                x = { ...l, [c]: p || g > 1 ? String(g) : void 0 },
                z = Bt(e.generate({ ...x })),
                S =
                    g === d
                        ? void 0
                        : Bt(e.generate({ ...x, page: String(g + 1) })),
                j =
                    g === 1
                        ? void 0
                        : Bt(
                              e.generate({
                                  ...x,
                                  page:
                                      !p && g - 1 === 1
                                          ? void 0
                                          : String(g - 1),
                              }),
                          );
            return {
                params: x,
                props: {
                    ...u,
                    page: {
                        data: a.slice(v, b),
                        start: v,
                        end: b - 1,
                        size: s,
                        total: a.length,
                        currentPage: g,
                        lastPage: d,
                        url: { current: z, next: S, prev: j },
                    },
                },
            };
        });
    };
}
function Bt(e) {
    return e === "" ? "/" : e;
}
async function Yr({ mod: e, route: t, routeCache: a, logger: n, ssr: r }) {
    let i = a.get(t);
    if (!e)
        throw new Error(
            "This is an error caused by Astro and not your code. Please file an issue.",
        );
    if (i?.staticPaths) return i.staticPaths;
    if ((Wr(e, { ssr: r, route: t }), r && !t.prerender)) {
        let c = Object.assign([], { keyed: new Map() });
        return a.set(t, { ...i, staticPaths: c }), c;
    }
    let o = [];
    if (!e.getStaticPaths) throw new Error("Unexpected Error.");
    (o = await e.getStaticPaths({
        paginate: Jr(t),
        rss() {
            throw new m(bn);
        },
    })),
        Vr(o, n, t);
    let s = o;
    s.keyed = new Map();
    for (let c of s) {
        let l = Fa(c.params, t);
        s.keyed.set(l, c);
    }
    return a.set(t, { ...i, staticPaths: s }), s;
}
var ke = class {
    logger;
    cache = {};
    mode;
    constructor(t, a = "production") {
        (this.logger = t), (this.mode = a);
    }
    clearAll() {
        this.cache = {};
    }
    set(t, a) {
        this.mode === "production" &&
            this.cache[t.component]?.staticPaths &&
            this.logger.warn(
                "routeCache",
                `Internal Warning: route cache overwritten. (${t.component})`,
            ),
            (this.cache[t.component] = a);
    }
    get(t) {
        return this.cache[t.component];
    }
};
function Xr(e, t, a, n) {
    let r = Fa(t, a),
        i = e.keyed.get(r);
    if (i) return i;
    n.debug("findPathItemByKey", `Unexpected cache miss looking for ${r}`);
}
async function Kr(e) {
    let { logger: t, mod: a, route: n, routeCache: r, pathname: i, ssr: o } = e;
    if (!n || n.pathname) return [{}, {}];
    let s = Zr(n, i) ?? {};
    if (Lt(n) || Mt(n)) return [s, {}];
    a && Qr(n, a, s);
    let c = await Yr({ mod: a, route: n, routeCache: r, logger: t, ssr: o }),
        l = Xr(c, s, n, t);
    if (!l && (!o || n.prerender))
        throw new m({
            ...xe,
            message: xe.message(i),
            hint: xe.hint([n.component]),
        });
    let u = l?.props ? { ...l.props } : {};
    return [s, u];
}
function Zr(e, t) {
    if (e.params.length) {
        let a = e.pattern.exec(decodeURIComponent(t));
        if (a) return Gr(e.params)(a);
    }
}
function Qr(e, t, a) {
    if (e.type === "endpoint" && t.getStaticPaths) {
        let n = e.segments[e.segments.length - 1],
            r = Object.values(a),
            i = r[r.length - 1];
        if (n.length === 1 && n[0].dynamic && i === void 0)
            throw new m({
                ...ye,
                message: ye.message(e.route),
                hint: ye.hint(e.component),
                location: { file: e.component },
            });
    }
}
var ca = Symbol.for("astro.locals");
async function It(e) {
    let t = e.request,
        a = e.pathname ?? new URL(t.url).pathname,
        [n, r] = await Kr({
            mod: e.mod,
            route: e.route,
            routeCache: e.env.routeCache,
            pathname: a,
            logger: e.env.logger,
            ssr: e.env.ssr,
        }),
        i = { ...e, pathname: a, params: n, props: r, locales: e.locales };
    return (
        Object.defineProperty(i, "locals", {
            enumerable: !0,
            get() {
                return Reflect.get(t, ca);
            },
            set(o) {
                if (typeof o != "object") throw new m(be);
                Reflect.set(t, ca, o);
            },
        }),
        i
    );
}
function ya(e) {
    if (e === "*") return [{ locale: e, qualityValue: void 0 }];
    let t = [],
        a = e.split(",").map((n) => n.trim());
    for (let n of a) {
        let r = n.split(";").map((s) => s.trim()),
            i = r[0],
            o = r[1];
        if (r)
            if (o && o.startsWith("q=")) {
                let s = Number.parseFloat(o.slice(2));
                Number.isNaN(s) || s > 1
                    ? t.push({ locale: i, qualityValue: void 0 })
                    : t.push({ locale: i, qualityValue: s });
            } else t.push({ locale: i, qualityValue: void 0 });
    }
    return t;
}
function wa(e, t) {
    let a = t.map(Y);
    return e
        .filter((n) => (n.locale !== "*" ? a.includes(Y(n.locale)) : !0))
        .sort((n, r) => {
            if (n.qualityValue && r.qualityValue) {
                if (n.qualityValue > r.qualityValue) return -1;
                if (n.qualityValue < r.qualityValue) return 1;
            }
            return 0;
        });
}
function _t(e, t) {
    let a = e.headers.get("Accept-Language"),
        n;
    if (a) {
        let i = wa(ya(a), t).at(0);
        i && i.locale !== "*" && (n = t.find((o) => Y(o) === Y(i.locale)));
    }
    return n;
}
function Ot(e, t) {
    let a = e.headers.get("Accept-Language"),
        n = [];
    if (a) {
        let r = wa(ya(a), t);
        if (r.length === 1 && r.at(0).locale === "*") return t;
        if (r.length > 0)
            for (let i of r) {
                let o = t.find((s) => Y(s) === Y(i.locale));
                o && n.push(o);
            }
    }
    return n;
}
var ba = new TextEncoder(),
    la = Symbol.for("astro.clientAddress"),
    jt = Symbol.for("astro.locals");
function Nt({
    request: e,
    params: t,
    site: a,
    props: n,
    adapterName: r,
    locales: i,
}) {
    let o, s;
    return {
        cookies: new se(e),
        request: e,
        params: t,
        site: a ? new URL(a) : void 0,
        generator: `Astro v${Ft}`,
        props: n,
        redirect(l, u) {
            return new Response(null, {
                status: u || 302,
                headers: { Location: l },
            });
        },
        ResponseWithEncoding: kt,
        get preferredLocale() {
            if (o) return o;
            if (i) return (o = _t(e, i)), o;
        },
        get preferredLocaleList() {
            if (s) return s;
            if (i) return (s = Ot(e, i)), s;
        },
        url: new URL(e.url),
        get clientAddress() {
            if (la in e) return Reflect.get(e, la);
            throw r ? new m({ ...W, message: W.message(r) }) : new m(ge);
        },
        get locals() {
            let l = Reflect.get(e, jt);
            if (
                (l === void 0 && ((l = {}), Reflect.set(e, jt, l)),
                typeof l != "object")
            )
                throw new m(be);
            return l;
        },
        set locals(l) {
            if (typeof l != "object") throw new m(be);
            Reflect.set(e, jt, l);
        },
    };
}
var kt = class extends Response {
    constructor(t, a, n) {
        typeof t == "string" &&
            (typeof Buffer < "u" && Buffer.from
                ? (t = Buffer.from(t, n))
                : (n == null || n === "utf8" || n === "utf-8") &&
                  (t = ba.encode(t))),
            super(t, a),
            n && this.headers.set("X-Astro-Encoding", n);
    }
};
async function Ea(e, t, a, n, r) {
    let i = Nt({
            request: a.request,
            params: a.params,
            props: a.props,
            site: t.site,
            adapterName: t.adapterName,
            locales: r,
        }),
        o;
    n
        ? (o = await Tt(
              t.logger,
              n,
              i,
              async () => await wt(e, i, t.ssr, t.logger),
          ))
        : (o = await wt(e, i, t.ssr, t.logger));
    let s = t.ssr && !a.route?.prerender;
    if (o instanceof Response)
        return (
            s &&
                o.headers.get("X-Astro-Encoding") &&
                t.logger.warn(
                    "ssr",
                    "`ResponseWithEncoding` is ignored in SSR. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.",
                ),
            ue(o, i.cookies),
            o
        );
    t.logger.warn(
        "astro",
        `${a.route.component} returns a simple object which is deprecated. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.`,
    ),
        s &&
            (o.hasOwnProperty("headers") &&
                t.logger.warn(
                    "ssr",
                    "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.",
                ),
            o.encoding &&
                t.logger.warn(
                    "ssr",
                    "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.",
                ));
    let c,
        l = new Headers(),
        u = a.route
            ? a.route.pathname ??
              a.route.segments
                  .map((d) => d.map((h) => h.content).join(""))
                  .join("/")
            : a.pathname,
        p = pa.default.getType(u) || "text/plain";
    return (
        l.set("Content-Type", `${p};charset=utf-8`),
        o.encoding && l.set("X-Astro-Encoding", o.encoding),
        o.body instanceof Uint8Array
            ? ((c = o.body), l.set("Content-Length", c.byteLength.toString()))
            : typeof Buffer < "u" && Buffer.from
            ? ((c = Buffer.from(o.body, o.encoding)),
              l.set("Content-Length", c.byteLength.toString()))
            : o.encoding == null ||
              o.encoding === "utf8" ||
              o.encoding === "utf-8"
            ? ((c = ba.encode(o.body)),
              l.set("Content-Length", c.byteLength.toString()))
            : (c = o.body),
        (o = new Response(c, { status: 200, headers: l })),
        ue(o, i.cookies),
        o
    );
}
function eo(e, t) {
    let a = e
            .map(
                (i) =>
                    "/" +
                    i
                        .map((o) =>
                            o.spread
                                ? `:${o.content.slice(3)}(.*)?`
                                : o.dynamic
                                ? `:${o.content}`
                                : o.content
                                      .normalize()
                                      .replace(/\?/g, "%3F")
                                      .replace(/#/g, "%23")
                                      .replace(/%5B/g, "[")
                                      .replace(/%5D/g, "]")
                                      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        )
                        .join(""),
            )
            .join(""),
        n = "";
    return t === "always" && e.length && (n = "/"), oa(a + n);
}
function Rt(e) {
    return {
        route: e.route,
        type: e.type,
        pattern: new RegExp(e.pattern),
        params: e.params,
        component: e.component,
        generate: eo(e.segments, e._meta.trailingSlash),
        pathname: e.pathname || void 0,
        segments: e.segments,
        prerender: e.prerender,
        redirect: e.redirect,
        redirectRoute: e.redirectRoute ? Rt(e.redirectRoute) : void 0,
    };
}
function to(e) {
    let t = [];
    for (let i of e.routes) {
        t.push({ ...i, routeData: Rt(i.routeData) });
        let o = i;
        o.routeData = Rt(i.routeData);
    }
    let a = new Set(e.assets),
        n = new Map(e.componentMetadata),
        r = new Map(e.clientDirectives);
    return {
        ...e,
        assets: a,
        componentMetadata: n,
        clientDirectives: r,
        routes: t,
    };
}
var Ca = to({
    adapterName: "@astrojs/cloudflare",
    routes: [
        {
            file: "index.html",
            links: [],
            scripts: [],
            styles: [],
            routeData: {
                route: "/",
                type: "page",
                pattern: "^\\/$",
                segments: [],
                params: [],
                component: "src/pages/index.astro",
                pathname: "/",
                prerender: !0,
                _meta: { trailingSlash: "ignore" },
            },
        },
        {
            file: "portfolio/index.html",
            links: [],
            scripts: [],
            styles: [],
            routeData: {
                route: "/portfolio",
                type: "page",
                pattern: "^\\/portfolio\\/?$",
                segments: [[{ content: "portfolio", dynamic: !1, spread: !1 }]],
                params: [],
                component: "src/pages/portfolio.astro",
                pathname: "/portfolio",
                prerender: !0,
                _meta: { trailingSlash: "ignore" },
            },
        },
        {
            file: "",
            links: [],
            scripts: [],
            styles: [],
            routeData: {
                type: "endpoint",
                route: "/_image",
                pattern: "^\\/_image$",
                segments: [[{ content: "_image", dynamic: !1, spread: !1 }]],
                params: [],
                component: "node_modules/astro/dist/assets/endpoint/generic.js",
                pathname: "/_image",
                prerender: !1,
                _meta: { trailingSlash: "ignore" },
            },
        },
    ],
    base: "/",
    compressHTML: !0,
    componentMetadata: [
        [
            "/home/haln/codes/portfolio/src/pages/portfolio.astro",
            { propagation: "in-tree", containsHead: !0 },
        ],
        [
            "/home/haln/codes/portfolio/src/pages/index.astro",
            { propagation: "none", containsHead: !0 },
        ],
        [
            "/home/haln/codes/portfolio/src/layout/layout.astro",
            { propagation: "in-tree", containsHead: !1 },
        ],
        [
            "\0@astro-page:src/pages/portfolio@_@astro",
            { propagation: "in-tree", containsHead: !1 },
        ],
        [
            "\0@astrojs-ssr-virtual-entry",
            { propagation: "in-tree", containsHead: !1 },
        ],
    ],
    renderers: [],
    clientDirectives: [
        [
            "idle",
            '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
        ],
        [
            "load",
            '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
        ],
        [
            "media",
            '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
        ],
        [
            "only",
            '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
        ],
        [
            "visible",
            '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
        ],
    ],
    entryModules: {
        "\0@astrojs-ssr-virtual-entry": "_worker.mjs",
        "\0@astro-renderers": "renderers.mjs",
        "\0empty-middleware": "_empty-middleware.mjs",
        "/node_modules/astro/dist/assets/endpoint/generic.js":
            "chunks/pages/generic_412e718f.mjs",
        "\0@astrojs-manifest": "manifest_500ea629.mjs",
        "\0@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":
            "chunks/generic_44b0fa94.mjs",
        "\0@astro-page:src/pages/index@_@astro": "chunks/index_f6b049c0.mjs",
        "\0@astro-page:src/pages/portfolio@_@astro":
            "chunks/portfolio_7459f28b.mjs",
        "@astrojs/svelte/client.js": "_astro/client.ef651e53.js",
        "/astro/hoisted.js?q=0": "_astro/hoisted.5c6452c7.js",
        "/home/haln/codes/portfolio/src/components/nav.svelte":
            "_astro/nav.83ac8dce.js",
        "astro:scripts/before-hydration.js": "",
    },
    assets: [
        "/_astro/hero.c635feb2.svg",
        "/_astro/about.37505d8e.svg",
        "/_astro/work.d74fb772.svg",
        "/_astro/index.e3084bc1.css",
        "/favicon.svg",
        "/$server_build/_empty-middleware.mjs",
        "/$server_build/_worker.mjs",
        "/$server_build/renderers.mjs",
        "/_astro/client.ef651e53.js",
        "/_astro/hoisted.5c6452c7.js",
        "/_astro/nav.83ac8dce.js",
        "/_astro/portfolio.dda9593f.css",
        "/$server_build/_astro/about.37505d8e.svg",
        "/$server_build/_astro/hero.c635feb2.svg",
        "/$server_build/_astro/index.e3084bc1.css",
        "/$server_build/_astro/work.d74fb772.svg",
        "/$server_build/chunks/generic_44b0fa94.mjs",
        "/$server_build/chunks/index_f6b049c0.mjs",
        "/$server_build/chunks/portfolio_7459f28b.mjs",
        "/$server_build/chunks/prerender_0c1d7f05.mjs",
        "/$server_build/chunks/astro/assets-service_838f4fe4.mjs",
        "/$server_build/chunks/astro/server_ec8b14a7.mjs",
        "/$server_build/chunks/pages/generic_412e718f.mjs",
        "/index.html",
        "/portfolio/index.html",
    ],
});
te();
Se();
ne();
pe();
function yo(e, t) {
    for (let a of t) if (e.includes(`/${a}`)) return !1;
    return !0;
}
function wo(e, t) {
    if (e)
        return async (a, n) => {
            if (!e) return await n();
            let { locales: r, defaultLocale: i, fallback: o } = e,
                s = a.url,
                c = await n();
            if (c instanceof Response) {
                let l = s.pathname.split("/"),
                    u = s.pathname.includes(`/${i}`),
                    p = yo(s.pathname, e.locales);
                if (e.routingStrategy === "prefix-other-locales" && u) {
                    let d = s.pathname.replace(`/${i}`, "");
                    return (
                        c.headers.set("Location", d),
                        new Response(null, { status: 404, headers: c.headers })
                    );
                } else if (e.routingStrategy === "prefix-always") {
                    if (s.pathname === t || s.pathname === t + "/")
                        return a.redirect(`${H(t, e.defaultLocale)}`);
                    if (p)
                        return new Response(null, {
                            status: 404,
                            headers: c.headers,
                        });
                }
                if (c.status >= 300 && o) {
                    let d = e.fallback ? Object.keys(e.fallback) : [],
                        h = l.find((D) => r.includes(D));
                    if (h && d.includes(h)) {
                        let D = o[h],
                            g;
                        return (
                            D === i
                                ? (g = s.pathname.replace(`/${h}`, ""))
                                : (g = s.pathname.replace(`/${h}`, `/${D}`)),
                            a.redirect(g)
                        );
                    }
                }
            }
            return c;
        };
}
var _a,
    qt = 1,
    bo = {
        write(e) {
            let t = console.error;
            ce[e.level] < ce.error && (t = console.log);
            function a() {
                let i = "",
                    o = e.label;
                return (
                    o &&
                        ((i += nn(ma.format(new Date()) + " ")),
                        e.level === "info"
                            ? (o = q(rn(`[${o}]`)))
                            : e.level === "warn"
                            ? (o = q(ze(`[${o}]`)))
                            : e.level === "error" && (o = q(an(`[${o}]`))),
                        (i += `${o} `)),
                    tn(i)
                );
            }
            let n = e.message;
            n === _a
                ? (qt++, (n = `${n} ${ze(`(x${qt})`)}`))
                : ((_a = n), (qt = 1));
            let r = a() + n;
            return t(r), !0;
        },
    },
    Eo = {
        default() {
            return new Response(null, { status: 301 });
        },
    },
    Co = {
        page: () => Promise.resolve(Eo),
        onRequest: (e, t) => t(),
        renderers: [],
    };
function Ao(...e) {
    let t = e.filter((n) => !!n),
        a = t.length;
    return a
        ? (n, r) => {
              return i(0, n);
              function i(o, s) {
                  let c = t[o];
                  return c(s, async () => (o < a - 1 ? i(o + 1, s) : r()));
              }
          }
        : (r, i) => i();
}
function Yt(e, t, a) {
    return a ? H(a, Ie(e)) : t ? de(H(t, Ie(e))) : e;
}
function So(e, t, a) {
    return e.type === "inline"
        ? { props: {}, children: e.content }
        : { props: { rel: "stylesheet", href: Yt(e.src, t, a) }, children: "" };
}
function Bo(e, t, a) {
    return new Set(e.map((n) => So(n, t, a)));
}
function jo(e, t, a) {
    return e.type === "external"
        ? ko(e.value, t, a)
        : { props: { type: "module" }, children: e.value };
}
function ko(e, t, a) {
    return { props: { type: "module", src: Yt(e, t, a) }, children: "" };
}
function Oa(e, t) {
    return t.routes.find((a) => a.pattern.test(decodeURI(e)));
}
var Na = Symbol.for("astro.clientAddress"),
    Ro = Symbol.for("astro.responseSent");
function $o(e) {
    if (e && e.expressions?.length === 1) return e.expressions[0];
}
var Wt = class {
    #e;
    #t;
    #n;
    constructor(t, a, n) {
        if (((this.#e = t), (this.#t = a), (this.#n = n), a))
            for (let r of Object.keys(a)) {
                if (this[r] !== void 0)
                    throw new m({ ...Ke, message: Ke.message(r) });
                Object.defineProperty(this, r, {
                    get() {
                        return !0;
                    },
                    enumerable: !0,
                });
            }
    }
    has(t) {
        return this.#t ? !!this.#t[t] : !1;
    }
    async render(t, a = []) {
        if (!this.#t || !this.has(t)) return;
        let n = this.#e;
        if (!Array.isArray(a))
            this.#n.warn(
                "Astro.slots.render",
                `Expected second parameter to be an array, received a ${typeof a}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`,
            );
        else if (a.length > 0) {
            let o = this.#t[t],
                s = typeof o == "function" ? await o(n) : await o,
                c = $o(s);
            if (c)
                return await N(n, async () =>
                    typeof c == "function" ? c(...a) : c,
                ).then((u) => (u != null ? String(u) : u));
            if (typeof s == "function")
                return await R(n, s(...a)).then((l) =>
                    l != null ? String(l) : l,
                );
        }
        let r = await N(n, this.#t[t]);
        return $(n, r);
    }
};
function Po(e) {
    let { params: t, request: a, resolve: n, locals: r } = e,
        i = new URL(a.url),
        o = new Headers();
    o.set("Content-Type", "text/html");
    let s = { status: e.status, statusText: "OK", headers: o };
    Object.defineProperty(s, "headers", {
        value: s.headers,
        enumerable: !0,
        writable: !1,
    });
    let c = e.cookies,
        l,
        u,
        p = {
            styles: e.styles ?? new Set(),
            scripts: e.scripts ?? new Set(),
            links: e.links ?? new Set(),
            componentMetadata: e.componentMetadata ?? new Map(),
            renderers: e.renderers,
            clientDirectives: e.clientDirectives,
            compressHTML: e.compressHTML,
            partial: e.partial,
            pathname: e.pathname,
            cookies: c,
            createAstro(d, h, D) {
                let g = new Wt(p, D, e.logger);
                return {
                    __proto__: d,
                    get clientAddress() {
                        if (!(Na in a))
                            throw e.adapterName
                                ? new m({
                                      ...W,
                                      message: W.message(e.adapterName),
                                  })
                                : new m(ge);
                        return Reflect.get(a, Na);
                    },
                    get cookies() {
                        return c || ((c = new se(a)), (p.cookies = c), c);
                    },
                    get preferredLocale() {
                        if (l) return l;
                        if (e.locales) return (l = _t(a, e.locales)), l;
                    },
                    get preferredLocaleList() {
                        if (u) return u;
                        if (e.locales) return (u = Ot(a, e.locales)), u;
                    },
                    params: t,
                    props: h,
                    locals: r,
                    request: a,
                    url: i,
                    redirect(b, x) {
                        if (a[Ro]) throw new m({ ...V });
                        return new Response(null, {
                            status: x || 302,
                            headers: { Location: b },
                        });
                    },
                    response: s,
                    slots: g,
                };
            },
            resolve: n,
            response: s,
            _metadata: {
                hasHydrationScript: !1,
                hasRenderedHead: !1,
                hasDirectives: new Set(),
                headInTree: !1,
                extraHead: [],
                propagators: new Set(),
            },
        };
    return p;
}
async function za({ mod: e, renderContext: t, env: a, cookies: n }) {
    if (Lt(t.route))
        return new Response(null, {
            status: va(t.route, t.request.method),
            headers: { location: xa(t.route, t.params) },
        });
    if (Mt(t.route)) return new Response(null, { status: 404 });
    if (!e) throw new m(Sn);
    let r = e.default;
    if (!r)
        throw new Error(
            `Expected an exported Astro component but received typeof ${typeof r}`,
        );
    let i = Po({
        adapterName: a.adapterName,
        links: t.links,
        styles: t.styles,
        logger: a.logger,
        params: t.params,
        pathname: t.pathname,
        componentMetadata: t.componentMetadata,
        resolve: a.resolve,
        renderers: a.renderers,
        clientDirectives: a.clientDirectives,
        compressHTML: a.compressHTML,
        request: t.request,
        partial: !!e.partial,
        site: a.site,
        scripts: t.scripts,
        ssr: a.ssr,
        status: t.status ?? 200,
        cookies: n,
        locals: t.locals ?? {},
        locales: t.locales,
    });
    e.frontmatter &&
        typeof e.frontmatter == "object" &&
        "draft" in e.frontmatter &&
        a.logger.warn(
            "astro",
            `The drafts feature is deprecated and used in ${t.route.component}. You should migrate to content collections instead. See https://docs.astro.build/en/guides/content-collections/#filtering-collection-queries for more information.`,
        );
    let o = await ra(i, r, t.props, null, a.streaming, t.route);
    return i.cookies && ue(o, i.cookies), o;
}
var Vt = class {
        env;
        #e;
        #t;
        constructor(t) {
            this.env = t;
        }
        setEnvironment() {}
        setEndpointHandler(t) {
            this.#t = t;
        }
        setMiddlewareFunction(t) {
            this.#e = t;
        }
        unsetMiddlewareFunction() {
            this.#e = void 0;
        }
        getEnvironment() {
            return this.env;
        }
        async renderRoute(t, a) {
            let n = await this.#n(t, this.env, a, this.#e);
            if (t.route.type === "endpoint") {
                if (!this.#t)
                    throw new Error(
                        "You created a pipeline that does not know how to handle the result coming from an endpoint.",
                    );
                return this.#t(t.request, n);
            } else return n;
        }
        async #n(t, a, n, r) {
            let i = Nt({
                request: t.request,
                params: t.params,
                props: t.props,
                site: a.site,
                adapterName: a.adapterName,
                locales: t.locales,
            });
            switch (t.route.type) {
                case "page":
                case "fallback":
                case "redirect":
                    return r
                        ? await Tt(a.logger, r, i, () =>
                              za({
                                  mod: n,
                                  renderContext: t,
                                  env: a,
                                  cookies: i.cookies,
                              }),
                          )
                        : await za({
                              mod: n,
                              renderContext: t,
                              env: a,
                              cookies: i.cookies,
                          });
                case "endpoint":
                    return await Ea(n, a, t, r, t.locales);
                default:
                    throw new Error(
                        `Couldn't find route of type [${t.route.type}]`,
                    );
            }
        }
    },
    Pe = class extends Error {
        originalResponse;
        constructor(t) {
            super(), (this.originalResponse = t);
        }
    },
    Gt = class extends Vt {
        constructor(t) {
            super(t), this.setEndpointHandler(this.#e);
        }
        async #e(t, a) {
            if (a.headers.get("X-Astro-Response") === "Not-Found")
                throw new Pe(a);
            return a;
        }
    },
    To = Symbol.for("astro.locals"),
    Ha = Symbol.for("astro.responseSent"),
    Lo = new Set([404, 500]),
    Jt = class {
        #e;
        #t;
        #n;
        #i = new je({ dest: bo, level: "info" });
        #r;
        #a;
        #u;
        constructor(t, a = !0) {
            (this.#e = t),
                (this.#t = { routes: t.routes.map((n) => n.routeData) }),
                (this.#n = new Map(t.routes.map((n) => [n.routeData, n]))),
                (this.#r = me(this.#e.base)),
                (this.#a = new Gt(this.#p(a))),
                (this.#u = new le(this.#i.options, this.#e.adapterName));
        }
        getAdapterLogger() {
            return this.#u;
        }
        #p(t = !1) {
            return {
                adapterName: this.#e.adapterName,
                logger: this.#i,
                mode: "production",
                compressHTML: this.#e.compressHTML,
                renderers: this.#e.renderers,
                clientDirectives: this.#e.clientDirectives,
                resolve: async (a) => {
                    if (!(a in this.#e.entryModules))
                        throw new Error(`Unable to resolve [${a}]`);
                    let n = this.#e.entryModules[a];
                    switch (!0) {
                        case n.startsWith("data:"):
                        case n.length === 0:
                            return n;
                        default:
                            return Yt(n, this.#e.base, this.#e.assetsPrefix);
                    }
                },
                routeCache: new ke(this.#i),
                site: this.#e.site,
                ssr: !0,
                streaming: t,
            };
        }
        set setManifestData(t) {
            this.#t = t;
        }
        removeBase(t) {
            return t.startsWith(this.#e.base) ? t.slice(this.#r.length + 1) : t;
        }
        match(t, a = {}) {
            let n = new URL(t.url);
            if (this.#e.assets.has(n.pathname)) return;
            let r = de(this.removeBase(n.pathname)),
                i = Oa(r, this.#t);
            if (!(!i || i.prerender)) return i;
        }
        async render(t, a, n) {
            if (
                (t.url !== Le(t.url) && (t = new Request(Le(t.url), t)),
                a || (a = this.match(t)),
                !a)
            )
                return this.#o(t, { status: 404 });
            Reflect.set(t, To, n ?? {});
            let r = this.#d(a.route),
                i = await this.#l(a),
                o = await i.page(),
                s = new URL(t.url),
                c = await this.#c(s, t, a, i, r),
                l;
            try {
                let u = wo(this.#e.i18n, this.#e.base);
                u
                    ? i.onRequest
                        ? this.#a.setMiddlewareFunction(Ao(u, i.onRequest))
                        : this.#a.setMiddlewareFunction(u)
                    : i.onRequest && this.#a.setMiddlewareFunction(i.onRequest),
                    (l = await this.#a.renderRoute(c, o));
            } catch (u) {
                return u instanceof Pe
                    ? this.#o(t, { status: 404, response: u.originalResponse })
                    : (this.#i.error("ssr", u.stack || u.message || String(u)),
                      this.#o(t, { status: 500 }));
            }
            return a.type === "page" || a.type === "redirect"
                ? Lo.has(l.status)
                    ? this.#o(t, { response: l, status: l.status })
                    : (Reflect.set(l, Ha, !0), l)
                : l;
        }
        setCookieHeaders(t) {
            return da(t);
        }
        async #c(t, a, n, r, i = 200) {
            if (n.type === "endpoint") {
                let o = "/" + this.removeBase(t.pathname),
                    c = await r.page();
                return await It({
                    request: a,
                    pathname: o,
                    route: n,
                    status: i,
                    env: this.#a.env,
                    mod: c,
                    locales: this.#e.i18n ? this.#e.i18n.locales : void 0,
                });
            } else {
                let o = de(this.removeBase(t.pathname)),
                    s = this.#n.get(n),
                    c = new Set(),
                    l = Bo(s.styles),
                    u = new Set();
                for (let d of s.scripts)
                    "stage" in d
                        ? d.stage === "head-inline" &&
                          u.add({ props: {}, children: d.children })
                        : u.add(jo(d));
                let p = await r.page();
                return await It({
                    request: a,
                    pathname: o,
                    componentMetadata: this.#e.componentMetadata,
                    scripts: u,
                    styles: l,
                    links: c,
                    route: n,
                    status: i,
                    mod: p,
                    env: this.#a.env,
                    locales: this.#e.i18n ? this.#e.i18n.locales : void 0,
                });
            }
        }
        async #o(t, { status: a, response: n, skipMiddleware: r = !1 }) {
            let i = Oa("/" + a, this.#t),
                o = new URL(t.url);
            if (i) {
                if (i.prerender) {
                    let l = i.route.endsWith(`/${a}`) ? ".html" : "",
                        u = new URL(`${this.#r}/${a}${l}`, o),
                        p = await fetch(u.toString()),
                        d = { status: a };
                    return this.#s(p, n, d);
                }
                let c = await this.#l(i);
                try {
                    let l = await this.#c(o, t, i, c, a),
                        u = await c.page();
                    r === !1 &&
                        c.onRequest &&
                        this.#a.setMiddlewareFunction(c.onRequest),
                        r && this.#a.unsetMiddlewareFunction();
                    let p = await this.#a.renderRoute(l, u);
                    return this.#s(p, n);
                } catch {
                    if (r === !1 && c.onRequest)
                        return this.#o(t, {
                            status: a,
                            response: n,
                            skipMiddleware: !0,
                        });
                }
            }
            let s = this.#s(new Response(null, { status: a }), n);
            return Reflect.set(s, Ha, !0), s;
        }
        #s(t, a, n) {
            if (!a)
                return n !== void 0
                    ? new Response(t.body, {
                          status: n.status,
                          statusText: t.statusText,
                          headers: t.headers,
                      })
                    : t;
            let { statusText: r, headers: i } = a,
                o = n?.status
                    ? n.status
                    : a.status === 200
                    ? t.status
                    : a.status;
            return new Response(t.body, {
                status: o,
                statusText: o === 200 ? t.statusText : r,
                headers: new Headers(Array.from(i)),
            });
        }
        #d(t) {
            return (
                (t = me(t)),
                t.endsWith("/404") ? 404 : t.endsWith("/500") ? 500 : 200
            );
        }
        async #l(t) {
            if (t.type === "redirect") return Co;
            if (this.#e.pageMap) {
                let a = this.#e.pageMap.get(t.component);
                if (!a)
                    throw new Error(
                        `Unexpectedly unable to find a component instance for route ${t.route}`,
                    );
                return await a();
            } else {
                if (this.#e.pageModule) return this.#e.pageModule;
                throw new Error(
                    "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.",
                );
            }
        }
    },
    Mo =
        typeof process == "object" &&
        Object.prototype.toString.call(process) === "[object process]";
function Io() {
    return new Proxy(
        {},
        {
            get: (e, t) => {
                console.warn(
                    `Unable to access \`import.meta\0.env.${t.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`,
                );
            },
        },
    );
}
Mo || (process.env = Io());
function Wa(e) {
    let t = new Jt(e);
    return {
        onRequest: async (n) => {
            let r = n.request,
                { env: i } = n;
            process.env = i;
            let { pathname: o } = new URL(r.url);
            if (e.assets.has(o)) return i.ASSETS.fetch(r);
            let s = t.match(r);
            Reflect.set(
                r,
                Symbol.for("astro.clientAddress"),
                r.headers.get("cf-connecting-ip"),
            );
            let c = {
                    runtime: {
                        waitUntil: (u) => {
                            n.waitUntil(u);
                        },
                        env: n.env,
                        cf: r.cf,
                        caches,
                    },
                },
                l = await t.render(r, s, c);
            if (t.setCookieHeaders)
                for (let u of t.setCookieHeaders(l))
                    l.headers.append("Set-Cookie", u);
            return l;
        },
        manifest: e,
    };
}
var Ua = Object.freeze(
        Object.defineProperty(
            { __proto__: null, createExports: Wa },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    ),
    _o = () => Promise.resolve().then(() => ($a(), Ra)),
    Oo = () => Promise.resolve().then(() => (La(), Ta)),
    No = () => Promise.resolve().then(() => (Ia(), Ma)),
    zo = new Map([
        ["node_modules/astro/dist/assets/endpoint/generic.js", _o],
        ["src/pages/index.astro", Oo],
        ["src/pages/portfolio.astro", No],
    ]),
    Va = Object.assign(Ca, { pageMap: zo, renderers: T }),
    Ho = void 0,
    Ga = Wa(Va),
    du = Ga.onRequest,
    mu = Ga.manifest,
    qa = "start";
qa in Ua && Ua[qa](Va, Ho);
export { mu as manifest, du as onRequest, zo as pageMap };
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/