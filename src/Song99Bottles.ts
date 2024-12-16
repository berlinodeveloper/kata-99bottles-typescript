class Song99Bottles {
  getLyrics(): string[] {
    return [...new Array(100)].flatMap((_, i) => {
      const bottlesNumber = 99 - i;
      const noMoreBottles = bottlesNumber === 0;
      const isOneBottle = bottlesNumber === 1;

      return [
        `${noMoreBottles ? "No more" : bottlesNumber} ${
          isOneBottle ? "bottle" : "bottles"
        } of beer on the wall, ${noMoreBottles ? "no more" : bottlesNumber} ${
          isOneBottle ? "bottle" : "bottles"
        } of beer.`,
        noMoreBottles
          ? "Go to the store and buy some more, 99 bottles of beer on the wall."
          : `Take one down and pass it around, ${
              isOneBottle ? "no more" : bottlesNumber - 1
            } ${
              bottlesNumber === 2 ? "bottle" : "bottles"
            } of beer on the wall.`,
      ];
    });
  }
}

export default Song99Bottles;
