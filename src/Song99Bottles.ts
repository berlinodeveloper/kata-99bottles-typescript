class Song99Bottles {
  getLyrics(): string[] {
    return [...new Array(100)].flatMap((_, i) => {
      const bottlesNumber = 99 - i;

      if (bottlesNumber === 0)
        return [
          "No more bottles of beer on the wall, no more bottles of beer.",
          "Go to the store and buy some more, 99 bottles of beer on the wall.",
        ];

      return [
        `${bottlesNumber} ${
          bottlesNumber === 1 ? "bottle" : "bottles"
        } of beer on the wall, ${bottlesNumber} ${
          bottlesNumber === 1 ? "bottle" : "bottles"
        } of beer.`,
        `Take one down and pass it around, ${
          bottlesNumber === 1 ? "no more" : bottlesNumber - 1
        } ${bottlesNumber === 2 ? "bottle" : "bottles"} of beer on the wall.`,
      ];
    });
  }
}

export default Song99Bottles;
