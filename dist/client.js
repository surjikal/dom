"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoisResponseGeneric = exports.WhoisResponseIANA = exports.lookup = void 0;
var whois_1 = require("./lib/whois");
var getServer = function (domain) { return __awaiter(void 0, void 0, void 0, function () {
    var data, response, refer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, whois_1.lookup(domain)];
            case 1:
                data = _a.sent();
                response = new WhoisResponseIANA(data);
                refer = response.getRefer();
                if (!refer)
                    throw new Error("Could not find server for domain '" + domain + "'.");
                return [2 /*return*/, refer];
        }
    });
}); };
exports.lookup = function (domain) { return __awaiter(void 0, void 0, void 0, function () {
    var server, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getServer(domain)];
            case 1:
                server = _a.sent();
                return [4 /*yield*/, whois_1.lookup(domain, { server: server })];
            case 2:
                data = _a.sent();
                return [2 /*return*/, new WhoisResponseGeneric(data)];
        }
    });
}); };
var WhoisResponse = /** @class */ (function () {
    function WhoisResponse(dataOrResponse) {
        if (dataOrResponse instanceof WhoisResponse) {
            dataOrResponse = dataOrResponse.data;
        }
        this.data = dataOrResponse;
        this.lines = this.data
            .split('\n')
            .map(function (x) { return (x || '').trim(); })
            .filter(function (x) { return x.length > 0; });
    }
    WhoisResponse.prototype.getValue = function (substring) {
        substring = substring.toLowerCase();
        var lines = this.lines.filter(function (x) {
            return x.toLowerCase().indexOf(substring) >= 0;
        });
        if (lines.length === 0) {
            return null;
        }
        if (lines.length > 1) {
            throw new Error("Found multiple lines matching '" + substring + "'\n" + lines.join('\n') + "\n");
        }
        var line = lines[0];
        var _a = line.split(':'), _ = _a[0], rest = _a.slice(1);
        var value = rest.join(':').trim();
        return value;
    };
    return WhoisResponse;
}());
var WhoisResponseIANA = /** @class */ (function (_super) {
    __extends(WhoisResponseIANA, _super);
    function WhoisResponseIANA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhoisResponseIANA.prototype.getRefer = function () {
        return this.getValue('refer:');
    };
    return WhoisResponseIANA;
}(WhoisResponse));
exports.WhoisResponseIANA = WhoisResponseIANA;
var WhoisResponseGeneric = /** @class */ (function (_super) {
    __extends(WhoisResponseGeneric, _super);
    function WhoisResponseGeneric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhoisResponseGeneric.prototype.getExpiryDate = function () {
        return this.getValue('Expiry Date:');
    };
    WhoisResponseGeneric.prototype.getUpdatedDate = function () {
        return this.getValue('Updated Date:');
    };
    WhoisResponseGeneric.prototype.getCreatedDate = function () {
        return this.getValue('Creation Date:');
    };
    return WhoisResponseGeneric;
}(WhoisResponse));
exports.WhoisResponseGeneric = WhoisResponseGeneric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWtEO0FBRWxELElBQU0sU0FBUyxHQUFHLFVBQU8sTUFBYzs7OztvQkFDdEIscUJBQU0sY0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBOUIsSUFBSSxHQUFHLFNBQXVCO2dCQUM5QixRQUFRLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEtBQUs7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBcUMsTUFBTSxPQUFJLENBQUMsQ0FBQztnQkFDN0Usc0JBQU8sS0FBSyxFQUFDOzs7S0FDaEIsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLFVBQU8sTUFBYzs7OztvQkFDeEIscUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBaEMsTUFBTSxHQUFHLFNBQXVCO2dCQUN6QixxQkFBTSxjQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBMUMsSUFBSSxHQUFHLFNBQW1DO2dCQUNoRCxzQkFBTyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFDOzs7S0FDekMsQ0FBQztBQUVGO0lBSUksdUJBQVksY0FBc0M7UUFDOUMsSUFBSSxjQUFjLFlBQVksYUFBYSxFQUFFO1lBQ3pDLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTthQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1gsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWhCLENBQWdCLENBQUM7YUFDNUIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUN0QixTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFrQyxTQUFTLFdBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBSSxDQUFDLENBQUM7U0FDMUY7UUFDRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBQSxLQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQUMsUUFBQSxFQUFLLElBQUksY0FBbUIsQ0FBQztRQUNyQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUFFRDtJQUF1QyxxQ0FBYTtJQUFwRDs7SUFJQSxDQUFDO0lBSEcsb0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBdUMsYUFBYSxHQUluRDtBQUpZLDhDQUFpQjtBQU05QjtJQUEwQyx3Q0FBYTtJQUF2RDs7SUFVQSxDQUFDO0lBVEcsNENBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsNkNBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsNkNBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFWRCxDQUEwQyxhQUFhLEdBVXREO0FBVlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9va3VwIGFzIHJhd0xvb2t1cCB9IGZyb20gJy4vbGliL3dob2lzJztcblxuY29uc3QgZ2V0U2VydmVyID0gYXN5bmMgKGRvbWFpbjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJhd0xvb2t1cChkb21haW4pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IFdob2lzUmVzcG9uc2VJQU5BKGRhdGEpO1xuICAgIGNvbnN0IHJlZmVyID0gcmVzcG9uc2UuZ2V0UmVmZXIoKTtcbiAgICBpZiAoIXJlZmVyKSB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIHNlcnZlciBmb3IgZG9tYWluICcke2RvbWFpbn0nLmApO1xuICAgIHJldHVybiByZWZlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb29rdXAgPSBhc3luYyAoZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPFdob2lzUmVzcG9uc2VHZW5lcmljPiA9PiB7XG4gICAgY29uc3Qgc2VydmVyID0gYXdhaXQgZ2V0U2VydmVyKGRvbWFpbik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJhd0xvb2t1cChkb21haW4sIHsgc2VydmVyIH0pO1xuICAgIHJldHVybiBuZXcgV2hvaXNSZXNwb25zZUdlbmVyaWMoZGF0YSk7XG59O1xuXG5jbGFzcyBXaG9pc1Jlc3BvbnNlIHtcbiAgICByZWFkb25seSBkYXRhOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbGluZXM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YU9yUmVzcG9uc2U6IHN0cmluZyB8IFdob2lzUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKGRhdGFPclJlc3BvbnNlIGluc3RhbmNlb2YgV2hvaXNSZXNwb25zZSkge1xuICAgICAgICAgICAgZGF0YU9yUmVzcG9uc2UgPSBkYXRhT3JSZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFPclJlc3BvbnNlO1xuICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5kYXRhXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAubWFwKCh4KSA9PiAoeCB8fCAnJykudHJpbSgpKVxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4geC5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZShzdWJzdHJpbmc6IHN0cmluZykge1xuICAgICAgICBzdWJzdHJpbmcgPSBzdWJzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN1YnN0cmluZykgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZvdW5kIG11bHRpcGxlIGxpbmVzIG1hdGNoaW5nICcke3N1YnN0cmluZ30nXFxuJHtsaW5lcy5qb2luKCdcXG4nKX1cXG5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbMF07XG4gICAgICAgIGNvbnN0IFtfLCAuLi5yZXN0XSA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0LmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaG9pc1Jlc3BvbnNlSUFOQSBleHRlbmRzIFdob2lzUmVzcG9uc2Uge1xuICAgIGdldFJlZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmVmZXI6Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2hvaXNSZXNwb25zZUdlbmVyaWMgZXh0ZW5kcyBXaG9pc1Jlc3BvbnNlIHtcbiAgICBnZXRFeHBpcnlEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnRXhwaXJ5IERhdGU6Jyk7XG4gICAgfVxuICAgIGdldFVwZGF0ZWREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnVXBkYXRlZCBEYXRlOicpO1xuICAgIH1cbiAgICBnZXRDcmVhdGVkRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ0NyZWF0aW9uIERhdGU6Jyk7XG4gICAgfVxufVxuIl19