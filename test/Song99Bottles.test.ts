import Song99Bottles from "../src/Song99Bottles";
const Song99BottlesClass = new Song99Bottles();

describe("Song99Bottles Test Suite", function (): void {
  it("get lyrics", (): void => {
    let result: string[] = Song99BottlesClass.getLyrics();
    expect(result).toEqual([
      "99 bottles of beer on the wall, 99 bottles of beer.",
      "Take one down and pass it around, 98 bottles of beer on the wall.",
    ]);
  });
});
