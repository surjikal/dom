"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
exports.parse = function (domain) {
    domain = (domain || '').trim();
    if (!domain) {
        throw new Error('Lookup is blank...');
    }
    domain = domain.replace(/^https?:\/\//, '');
    domain = domain.replace(/(:\d+)?(\/.*)?$/, '');
    return domain;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLEtBQUssR0FBRyxVQUFDLE1BQWM7SUFDaEMsTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDekM7SUFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBhcnNlID0gKGRvbWFpbjogc3RyaW5nKSA9PiB7XG4gICAgZG9tYWluID0gKGRvbWFpbiB8fCAnJykudHJpbSgpO1xuICAgIGlmICghZG9tYWluKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTG9va3VwIGlzIGJsYW5rLi4uJyk7XG4gICAgfVxuICAgIGRvbWFpbiA9IGRvbWFpbi5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sICcnKTtcbiAgICBkb21haW4gPSBkb21haW4ucmVwbGFjZSgvKDpcXGQrKT8oXFwvLiopPyQvLCAnJyk7XG4gICAgcmV0dXJuIGRvbWFpbjtcbn07XG4iXX0=