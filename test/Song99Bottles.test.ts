import Song99Bottles from "../src/Song99Bottles";
const Song99BottlesClass = new Song99Bottles();

describe("Song99Bottles Test Suite", function (): void {
  it("get lyrics", (): void => {
    let result: string[] = Song99BottlesClass.getLyrics();
    expect(result).toEqual([]);
  });
});
