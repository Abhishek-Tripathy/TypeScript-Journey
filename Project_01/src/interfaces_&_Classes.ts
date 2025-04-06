interface Apps {
   camera: string,
   location: number,
   flashLight: boolean
}

class GooglePay implements Apps {
   constructor(
      public camera: string,
      public location: number,
      public flashLight: boolean
   ){}
}