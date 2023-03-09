/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */

// Need a if and else statement
export function bookEndList(numbers: number[]): number[] {
    const firstANDlast = [];
    const lastindex = numbers.length - 1;
    const lenOfarr = numbers.length;

    if (lenOfarr === 0) {
        return numbers;
    } else if (lenOfarr === 1) {
        firstANDlast.push(numbers[0]);
        firstANDlast.push(numbers[0]);
    } else {
        firstANDlast.push(numbers[0], numbers[lastindex]);
    }

    return firstANDlast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
// convert string to number. Example is "10" would be 10 and "Hello" would be 0
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number =>
        isNaN(Number(str)) ? 0 : Number(str)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollarSign = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount
    );
    return noDollarSign.map((dstr: string): number =>
        isNaN(Number(dstr)) ? 0 : Number(dstr)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
//Should remove ? (filter) first and then check for ! to make everything else uppercase (map)

export const shoutIfExclaiming = (messages: string[]): string[] => {
    const hasNoQuestionMark = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return hasNoQuestionMark.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
// use a filter
export function countShortWords(words: string[]): number {
    const numWordsLfour = words.filter(
        (word: string): boolean => word.length < 4
    );

    return numWordsLfour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
// use a every
export function allRGB(colors: string[]): boolean {
    let boolVal = true;

    // if (colors.length === 0) {
    //     return boolVal;
    // }
    const rgbcolor = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors.length !== rgbcolor.length) {
        boolVal = false;
    }
    return boolVal;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
// [1,2,3]
//
export function makeMath(addends: number[]): string {
    let convertType = "";

    if (addends.length === 0) {
        convertType = "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        convertType = sum.toString() + "=";

        addends.map((num: number) => (convertType += num.toString() + "+"));

        convertType = convertType.slice(0, -1);
    }

    return convertType;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
// use .findIndex function
//
export function injectPositive(values: number[]): number[] {
    const firstNegNumIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    let newArray = [];
    // Did find a index that has a negative number
    if (firstNegNumIndex !== -1) {
        //Made a new array from 0 index to first NegNumIndex
        const numTillNegNum = values.slice(0, firstNegNumIndex);

        // Make a new array from NegativeNumIndex to end of array using splice
        const restOfArray = values.slice(firstNegNumIndex + 1);

        //Took the sum of the previous numbers before the negative number index
        const sum = numTillNegNum.reduce(
            (currSum: number, num: number): number => currSum + num,
            0
        );

        newArray = [
            ...numTillNegNum,
            values[firstNegNumIndex],
            sum,
            ...restOfArray
        ];
    } else {
        const sum = values.reduce(
            (currSum: number, num: number): number => currSum + num,
            0
        );
        newArray = [...values, sum];
    }
    return newArray;
}
