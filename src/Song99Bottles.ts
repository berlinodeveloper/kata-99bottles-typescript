class Song99Bottles {
  getLyrics(): string[] {
    return [...new Array(100)].flatMap((_, i) => {
      const bottlesNumber = 99 - i;

      return [
        `${bottlesNumber === 0 ? "No more" : bottlesNumber} ${
          bottlesNumber === 1 ? "bottle" : "bottles"
        } of beer on the wall, ${
          bottlesNumber === 0 ? "no more" : bottlesNumber
        } ${bottlesNumber === 1 ? "bottle" : "bottles"} of beer.`,
        bottlesNumber === 0
          ? "Go to the store and buy some more, 99 bottles of beer on the wall."
          : `Take one down and pass it around, ${
              bottlesNumber === 1 ? "no more" : bottlesNumber - 1
            } ${
              bottlesNumber === 2 ? "bottle" : "bottles"
            } of beer on the wall.`,
      ];
    });
  }
}

export default Song99Bottles;
