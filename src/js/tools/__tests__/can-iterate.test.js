import { canIterate } from '../can-iterate';

describe('Функция canIterate()', () => {
  const iterableData = [
    new Map(),
    new Set(),
    new Uint16Array(),
    [],
    'Frontend',
  ];
  const nonIterableData = [
    {},
    123,
    null,
    undefined,
    true,
    false,
  ];

  it('Переданы итерируемые объекты | Возвращает true', () => {
    iterableData.forEach((data) => expect(canIterate(data)).toBe(true));
  });

  it('Переданы не итерируемые объекты | Возвращает false', () => {
    nonIterableData.forEach((data) => expect(canIterate(data)).toBe(false));
  });
});
