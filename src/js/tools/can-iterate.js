/**
 * Проверяет, можно ли итерировать по объекту.
 *
 * Эта функция определяет, является ли переданный объект итерируемым,
 * проверяя, не является ли он `null` или `undefined`, а также
 * имеет ли он метод `[Symbol.iterator]` в прототипе.
 *
 * @param {any} obj - Объект, который необходимо проверить на итерируемость.
 * @returns {boolean} - Возвращает `true`, если объект итерируемый, в противном случае `false`.
 */
export const canIterate = (obj) => obj !== null && obj !== undefined && typeof obj[Symbol.iterator] === 'function';
