"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookup = void 0;
var whois = require('whois');
var defaultOptions = {
    server: 'whois.iana.org',
    verbose: false,
    follow: 0,
};
exports.lookup = function (domain, options) {
    options = __assign(__assign({}, defaultOptions), options);
    return new Promise(function (resolve, reject) {
        whois.lookup(domain, options, function (err, response) {
            if (err)
                return reject(err);
            resolve(response);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hvaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3dob2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBUS9CLElBQU0sY0FBYyxHQUFHO0lBQ25CLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUM7QUFFVyxRQUFBLE1BQU0sR0FBRyxVQUFDLE1BQWMsRUFBRSxPQUF1QjtJQUMxRCxPQUFPLHlCQUFRLGNBQWMsR0FBSyxPQUFPLENBQUUsQ0FBQztJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQUMsR0FBWSxFQUFFLFFBQWdCO1lBQ3pELElBQUksR0FBRztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdob2lzID0gcmVxdWlyZSgnd2hvaXMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBMb29rdXBPcHRpb25zIHtcbiAgICBzZXJ2ZXI6IHN0cmluZztcbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcbiAgICBmb2xsb3c/OiBudW1iZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHNlcnZlcjogJ3dob2lzLmlhbmEub3JnJyxcbiAgICB2ZXJib3NlOiBmYWxzZSxcbiAgICBmb2xsb3c6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgbG9va3VwID0gKGRvbWFpbjogc3RyaW5nLCBvcHRpb25zPzogTG9va3VwT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgb3B0aW9ucyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3aG9pcy5sb29rdXAoZG9tYWluLCBvcHRpb25zLCAoZXJyOiB1bmtub3duLCByZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIl19