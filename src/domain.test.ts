import { parse } from './domain';

test('parse', () => {
    expect(parse('http://example.com')).toBe('example.com');
    expect(parse('http://example.com:8000')).toBe('example.com');
    expect(parse('http://example.com:8000/bob')).toBe('example.com');
});
