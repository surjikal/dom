"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.parseArgs = void 0;
var date_fns_1 = require("date-fns");
var client_1 = require("./client");
var domain_1 = require("./domain");
var usage = function () {
    var error = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        error[_i] = arguments[_i];
    }
    if (error.length !== 0) {
        console.error.apply(console, __spreadArrays(['ERROR:'], error));
    }
    console.error('Usage: ./lookup <domain>');
    process.exit(-1);
};
exports.parseArgs = function (argv) {
    var domain = (argv[2] || '').trim();
    if (!domain)
        usage();
    try {
        domain = domain_1.parse(argv[2]);
    }
    catch (error) {
        usage('invalid domain:', error);
    }
    return { domain: domain };
};
var formatTimestamp = function (d) {
    if (d === null)
        return null;
    return date_fns_1.formatDistanceToNow(new Date(d));
};
var formatResponse = function (response) {
    var createdAt = response.getCreatedDate();
    var expiresAt = response.getExpiryDate();
    var updatedAt = response.getUpdatedDate();
    console.log('Created at:', formatTimestamp(createdAt));
    console.log('Expires at:', formatTimestamp(expiresAt));
    console.log('Updated at:', formatTimestamp(updatedAt));
};
exports.main = function (argv) { return __awaiter(void 0, void 0, void 0, function () {
    var domain, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                domain = exports.parseArgs(argv).domain;
                return [4 /*yield*/, client_1.lookup(domain)];
            case 1:
                response = _a.sent();
                formatResponse(response);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hvaXouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvd2hvaXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyxtQ0FBd0Q7QUFDeEQsbUNBQWlDO0FBRWpDLElBQU0sS0FBSyxHQUFHO0lBQUMsZUFBa0I7U0FBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1FBQWxCLDBCQUFrQjs7SUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sa0JBQU8sUUFBUSxHQUFLLEtBQUssR0FBRTtLQUNyQztJQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsVUFBQyxJQUFjO0lBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxNQUFNO1FBQUUsS0FBSyxFQUFFLENBQUM7SUFDckIsSUFBSTtRQUNBLE1BQU0sR0FBRyxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFVBQUMsQ0FBZ0I7SUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVCLE9BQU8sOEJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxVQUFDLFFBQThCO0lBQ2xELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLFVBQU8sSUFBYzs7Ozs7Z0JBQzdCLE1BQU0sR0FBSyxpQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFwQixDQUFxQjtnQkFDbEIscUJBQU0sZUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQUNyQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7S0FDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBsb29rdXAsIFdob2lzUmVzcG9uc2VHZW5lcmljIH0gZnJvbSAnLi9jbGllbnQnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL2RvbWFpbic7XG5cbmNvbnN0IHVzYWdlID0gKC4uLmVycm9yOiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmIChlcnJvci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRVJST1I6JywgLi4uZXJyb3IpO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdVc2FnZTogLi9sb29rdXAgPGRvbWFpbj4nKTtcbiAgICBwcm9jZXNzLmV4aXQoLTEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlQXJncyA9IChhcmd2OiBzdHJpbmdbXSkgPT4ge1xuICAgIGxldCBkb21haW4gPSAoYXJndlsyXSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghZG9tYWluKSB1c2FnZSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGRvbWFpbiA9IHBhcnNlKGFyZ3ZbMl0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHVzYWdlKCdpbnZhbGlkIGRvbWFpbjonLCBlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiB7IGRvbWFpbiB9O1xufTtcblxuY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKGQ6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgICBpZiAoZCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoZCkpO1xufTtcblxuY29uc3QgZm9ybWF0UmVzcG9uc2UgPSAocmVzcG9uc2U6IFdob2lzUmVzcG9uc2VHZW5lcmljKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZEF0ID0gcmVzcG9uc2UuZ2V0Q3JlYXRlZERhdGUoKTtcbiAgICBjb25zdCBleHBpcmVzQXQgPSByZXNwb25zZS5nZXRFeHBpcnlEYXRlKCk7XG4gICAgY29uc3QgdXBkYXRlZEF0ID0gcmVzcG9uc2UuZ2V0VXBkYXRlZERhdGUoKTtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBhdDonLCBmb3JtYXRUaW1lc3RhbXAoY3JlYXRlZEF0KSk7XG4gICAgY29uc29sZS5sb2coJ0V4cGlyZXMgYXQ6JywgZm9ybWF0VGltZXN0YW1wKGV4cGlyZXNBdCkpO1xuICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkIGF0OicsIGZvcm1hdFRpbWVzdGFtcCh1cGRhdGVkQXQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gYXN5bmMgKGFyZ3Y6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgeyBkb21haW4gfSA9IHBhcnNlQXJncyhhcmd2KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxvb2t1cChkb21haW4pO1xuICAgIGZvcm1hdFJlc3BvbnNlKHJlc3BvbnNlKTtcbn07XG4iXX0=