import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getproduct() {
    return [
      new product(
        'item 1',
        'suunto smart watch 1 ',
        500,
        'watches',
        'https://thesportshop.co.il/wp-content/uploads/2020/07/SS050474000-SUUNTO3MOSSGREY-PerspectiveView_NOT-plan-updated.jpg.webp',
        'Suitable for all sports: running, swimming, cycling, gym training, walking and more.' ,
       ), 
      new product(
        'item 2',
        'suunto smart watch 2',
        350,
        'watches',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/01graphite-frontperspective-apps.jpg',
        'Offers long battery life A compact multi-sport GPS watch, suitable for any activity you choose to do and track.' ,
        
      ),
      new product(
        'item 3',
        'suunto smart watch 3',
        1000,
        'watches',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/SS050021000-SUUNTO9-GEN1_BAROWhite-PerspectiveView_INS-Outdoor-in-Barometer.jpg',
        'With a built-in heart rate monitor, a multi-sport GPS watch designed for athletes who demand the best from their watch.' ,
      ),
      new product(
        'item 4',
        'suunto smart watch 4',
        600,
        'watches',
        'https://thesportshop.co.il/wp-content/uploads/2020/07/SS050299000-SUUNTO5G1ALLBLACK-PerspectiveView_Herowatchface-red-1.jpg',
        'Integrates sports into the routine of life. The combination of your love of sports and the busy routine of life can sometimes be difficult - you need a sports watch that is ready for activity when you are ready, a smartwatch that operates your daily routine.' ,
      ),
      new product(
        'item 5',
        'suunto smart watch 5',
        800,
        'watches',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/SS050255000-SUUNTO9-G1-BAROCOPPER-PerspectiveView_TR-Running-Start-Ultra.jpg',
        'Will offer you a training program based on the activities you performed and your fitness level.' ,
      ),
      new product(
        '1',
        'NIKE basketball',
        50,
        'sports',
        'https://thesportshop.co.il/wp-content/uploads/2020/05/N000116405507.jpg.webp',
        'NIKE VERSA TACK 8P No. 7 indoor / outdoor basketball. The synthetic skin from which the ball is made provides a soft and "sticky" touch that improves the grip and control of the ball. The ball grooves provide precision and ball control.' ,
      ),
      new product(
        '2',
        'NIKE football',
        70,
        'sports',
        'https://thesportshop.co.il/wp-content/uploads/2020/10/N000014595305_SU19_NIKE_MINI_SPIN_4.0_FB_PHSFP001.jpg',
        'NIKE MINI SPIN 4.0 football ball, with a unique design for optimal rotation. Made of extremely durable rubber for play in all weathers. Rough shell for good ball control and grip.' ,
      ),
      new product(
        '3',
        'NIKE VOLLEYBALL',
        90,
        'sports',
        'https://thesportshop.co.il/wp-content/uploads/2020/07/N000182497803_NIKE-SKILLS-VOLLEYBALL.jpg.webp',
        'Mini volleyball NIKE SKILLS VOLLEYBALL is used as a training ball, game and dedication. Suitable for play skills and children.' ,
      ),
      new product(
        '4',
        'NIKE VOLLEYBALL',
        70,
        'sports',
        'https://thesportshop.co.il/wp-content/uploads/2020/07/N000182492103_NIKE-SKILLS-VOLLEYBALL.jpg.webp',
        'Mini volleyball NIKE SKILLS VOLLEYBALL Maybe as a training ball, game and dedication. Suitable for play skills and children.' ,
      ),
      new product(
        '5',
        'NIKE basketball',
        40,
        'sports',
        'https://thesportshop.co.il/wp-content/uploads/2020/07/NKI0084707_NIKE_Dominate_8_BB.jpg.webp',
        'NIKE DOMINATE 8P outdoor basketball An extremely durable rubber ball that allows you to play on any surface.' ,
      ),
      new product(
        '1',
        'Wireless headphones',
        90,
        'headphones',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/boxearphones2_Green.jpg',
        'Wireless button headphones with an ergonomic and compact design that allow you to make calls and listen to music anywhere easily, comfortably and in style.' ,
      ),
      new product(
        '2',
        'Wireless and compact headphones',
        100,
        'headphones',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/01-Gold-with-case.jpg',
        'Wireless and compact button headphones that allow you to listen to music anywhere and without any restrictions. Enjoy quality sound when connected to any device through the glands.' ,
      ),
      new product(
        '3',
        'Dual microphones headphone',
        120,
        'headphones',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/03-Earbuds-with-Case.jpg',
        'Dual microphones in background noise filtering technology, combined with DSP (Digital Signal Processor) that effectively analyze and block environmental noise.' ,
      ),
      new product(
        '4',
        'waterproof headphones',
        140,
        'headphones',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/new-ibfree-01blue.jpg',
        'The headphones in the IPX6 waterproof standard ensure durability for outdoor training and intensive training and resistance to sweat and terrain conditions.' ,
      ),
      new product(
        '5',
        ' Noise Reduction  headphones',
        160,
        'headphones',
        'https://thesportshop.co.il/wp-content/uploads/2020/08/20180607115402.jpg',
        'Background Noise Reduction Technology - A microphone built into ENC (Environmental Noise Cancellation) technology that filters out background noise and allows clear and unambiguous conversations even in a noisy environment.' ,
      ),
      new product(
        '1',
        ' VO2 WAVE 909 treadmel',
        300,
        'FitnessEquipment',
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5733895/extra_large/afd863660fa1fe5fbe018e5c5f16c5c8.jpg',
        'The Wave808 elliptical from Vo2 is a very user-friendly elliptical that has everything needed to get in shape in style.' ,
      ),
      new product(
        '2',
        ' Kettler Berlin S1- Kettler Berlin S1 ',
        400,
        'FitnessEquipment',
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5110215/large/f110e80a118857ad52eacd16834c1f42.jpg',
        'Berlin S1 running track Berlin S1 running track from Kettler Germany The track comes with a powerful engine that drives the track up to a speed of 16 km / h and you can change the slope up to 12%.' ,
      ),
      new product(
        '3',
        ' bsb 510 br Body sculpture',
        500,
        'FitnessEquipment',
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/3232580/large/16c43163d5d16e3f7b97720d1abd2f4c.jpg',
        'A professionally adjustable and foldable professional mouthpiece used for free training.' ,
      ),
      new product(
        '4',
        ' Hexagonal rubber weight 9 kg',
        90,
        'FitnessEquipment',
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5140917/large/ad49ad1114920a00dd11bd23a4fdc6d4.jpg',
        'Hexagonal rubber weight 9 kg' ,
        
      ),
      new product(
        '5',
        ' 16KG KETTLEBELL',
        40,
        'FitnessEquipment',
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5140805/large/680cba7e4b1a4277a5702adaac42b097.jpg',
        '16KG KETTLEBELL' ,
      ),
    
     
     
      
    ]
  }
}
  class product{
    serialNumber:string;
    name:string;
    price:number;
    category:string;
    img:string;
    description:string;
  
    constructor(
      serialNumber:string,
      name:string,
      price:number,
      category:string,
      img:string,
      description:string){
        this.img = img;
        this.name = name;
        this.description = description;
        this.serialNumber=serialNumber;
        this.category=category;
        this.price=price;
      }
  }


