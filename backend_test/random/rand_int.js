module.exports = function (min = 0, max = 100) {
    // Убеждаемся, что min и max - целые числа
    min = Math.ceil(min);
    max = Math.floor(max);

    // Math.random() возвращает число от 0 (включительно) до 1 (исключительно)
    // Умножаем его на (max - min + 1), чтобы получить число в диапазоне от min до max включительно
    // Math.floor() округляет вниз до ближайшего целого числа
    // Прибавляем min, чтобы сдвинуть диапазон
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
