export {};

declare global {
  interface Window {
    /**
     * Just a big ol' fish function you've never seen before
     * So big, it's stuck to the window object
     */
    seeBigFish: Function;
  } 
  interface TestType {
    name: string
  }
}