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
exports.main(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyxtQ0FBd0Q7QUFDeEQsbUNBQWlDO0FBRWpDLElBQU0sS0FBSyxHQUFHO0lBQUMsZUFBa0I7U0FBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1FBQWxCLDBCQUFrQjs7SUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sa0JBQU8sUUFBUSxHQUFLLEtBQUssR0FBRTtLQUNyQztJQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsVUFBQyxJQUFjO0lBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxNQUFNO1FBQUUsS0FBSyxFQUFFLENBQUM7SUFDckIsSUFBSTtRQUNBLE1BQU0sR0FBRyxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNuQztJQUNELE9BQU8sRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFVBQUMsQ0FBZ0I7SUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzVCLE9BQU8sOEJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxVQUFDLFFBQThCO0lBQ2xELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHLFVBQU8sSUFBYzs7Ozs7Z0JBQzdCLE1BQU0sR0FBSyxpQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFwQixDQUFxQjtnQkFDbEIscUJBQU0sZUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQUNyQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7S0FDNUIsQ0FBQztBQUVGLFlBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgbG9va3VwLCBXaG9pc1Jlc3BvbnNlR2VuZXJpYyB9IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9kb21haW4nO1xuXG5jb25zdCB1c2FnZSA9ICguLi5lcnJvcjogc3RyaW5nW10pID0+IHtcbiAgICBpZiAoZXJyb3IubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SOicsIC4uLmVycm9yKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignVXNhZ2U6IC4vbG9va3VwIDxkb21haW4+Jyk7XG4gICAgcHJvY2Vzcy5leGl0KC0xKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZUFyZ3MgPSAoYXJndjogc3RyaW5nW10pID0+IHtcbiAgICBsZXQgZG9tYWluID0gKGFyZ3ZbMl0gfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWRvbWFpbikgdXNhZ2UoKTtcbiAgICB0cnkge1xuICAgICAgICBkb21haW4gPSBwYXJzZShhcmd2WzJdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB1c2FnZSgnaW52YWxpZCBkb21haW46JywgZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4geyBkb21haW4gfTtcbn07XG5cbmNvbnN0IGZvcm1hdFRpbWVzdGFtcCA9IChkOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgaWYgKGQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGQpKTtcbn07XG5cbmNvbnN0IGZvcm1hdFJlc3BvbnNlID0gKHJlc3BvbnNlOiBXaG9pc1Jlc3BvbnNlR2VuZXJpYykgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRBdCA9IHJlc3BvbnNlLmdldENyZWF0ZWREYXRlKCk7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gcmVzcG9uc2UuZ2V0RXhwaXJ5RGF0ZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRBdCA9IHJlc3BvbnNlLmdldFVwZGF0ZWREYXRlKCk7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgYXQ6JywgZm9ybWF0VGltZXN0YW1wKGNyZWF0ZWRBdCkpO1xuICAgIGNvbnNvbGUubG9nKCdFeHBpcmVzIGF0OicsIGZvcm1hdFRpbWVzdGFtcChleHBpcmVzQXQpKTtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRlZCBhdDonLCBmb3JtYXRUaW1lc3RhbXAodXBkYXRlZEF0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGFzeW5jIChhcmd2OiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IHsgZG9tYWluIH0gPSBwYXJzZUFyZ3MoYXJndik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb29rdXAoZG9tYWluKTtcbiAgICBmb3JtYXRSZXNwb25zZShyZXNwb25zZSk7XG59O1xuXG5tYWluKHByb2Nlc3MuYXJndik7XG4iXX0=