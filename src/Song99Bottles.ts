class Song99Bottles {
  getLyrics(): string[] {
    return [...new Array(99)].flatMap((_, i) => {
      const bottlesNumber = 99 - i;
      if (bottlesNumber === 2)
        return [
          "2 bottles of beer on the wall, 2 bottles of beer.",
          "Take one down and pass it around, 1 bottle of beer on the wall.",
        ];

      if (bottlesNumber === 1)
        return [
          "1 bottle of beer on the wall, 1 bottle of beer.",
          "Take one down and pass it around, no more bottles of beer on the wall.",
        ];

      return [
        `${bottlesNumber} bottles of beer on the wall, ${bottlesNumber} bottles of beer.`,
        `Take one down and pass it around, ${
          bottlesNumber - 1
        } bottles of beer on the wall.`,
      ];
    });
  }
}

export default Song99Bottles;
