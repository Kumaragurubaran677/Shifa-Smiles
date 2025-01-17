import { StaticImageData } from 'next/image';
import AdjustablePearlet from "@/assets/Collections/Adjustable-Pearlet.jpg";
import ArielBracelet from "@/assets/Collections/Ariel-Bracelet.jpg";
import AuraBracelet from "@/assets/Collections/Aura-Bracelet.jpg";
import BlackAndPinkJellyBeads from "@/assets/Collections/Black-and-Pink-Jelly-Beads-Bracelet.jpg";
import BlackAndWhiteJellyBeads from "@/assets/Collections/Black-and-White-Jelly-Beads-Bracelet.jpg";
import BlackAndWhiteBracelet from "@/assets/Collections/BlackandWhiteBracelet.png";
import BlackCracklesBracelet from "@/assets/Collections/Black-Crackles-Bracelet.jpg";
import BlackCracklesWithSugarBeads from "@/assets/Collections/Black-Crackles-with-Sugar-Beads-Bracelet.jpg";
import BlackNameizBracelet from "@/assets/Collections/Black-Namiez-White-Bracelet.jpg";
import BlueCracklesWithSugarBeads from "@/assets/Collections/Blue-Crackles-with-Sugar-Beads-Bracelet.jpg";
import BroCodeBracelet from "@/assets/Collections/Bro-Code-Bracelet.jpg";
import CharmerBracelet from "@/assets/Collections/Charmer-Bracelet.jpg";
import CherryRedCrackles from "@/assets/Collections/Cherry-Red-Crackles-Bracelet.jpg";
import ClassicPearlBracelets from "@/assets/Collections/Classic-Pearl-bracelet.jpg";
import CracklesWithCustomCharm from "@/assets/Collections/Crackles-with-Custom-Charm.jpg";
import DaisyjellyBeads from "@/assets/Collections/Daisy-Jelly-Beads-Bracelet.jpg";
import GoldenPearls from "@/assets/Collections/Golden-Pearls.jpg";
import IcyBlueCrackles from "@/assets/Collections/Icy-Blue-Crackles-Bracelet.jpg";
import JulietteBracelet from "@/assets/Collections/Juliette-Bracelet.jpg";
import LavenderCrackles from "@/assets/Collections/Lavender-Crackles-Bracelet.jpg";
import MagnetHeartCrackles from "@/assets/Collections/Magnet-Heart-Crackles-Bracelet.jpg";
import MagneticHeartJellyBeads from "@/assets/Collections/Magnetic-Heart-Jelly-Beads-Bracelet.jpg";
import MarshmallowBracelet from "@/assets/Collections/Marshmallow-Bracelet.jpg";
import MixedPearlBracelet from "@/assets/Collections/Mixed-Pearl-Bracelets.jpg";
import NamiezHeartBracelet from "@/assets/Collections/Namiez-Heart-Bracelet.jpg";
import PastelJellyBeads from "@/assets/Collections/Pastel-Jelly-Beads-Bracelet.jpg";
import PearlAndHearts from "@/assets/Collections/Pearl-and-Hearts.jpg";
import PearlNamiezBlack from "@/assets/Collections/Pearl-Namiez-Black-Bracelet.jpg";
import PearlTulip from "@/assets/Collections/Pearl-Tulip.jpg";
import PearlishAssortments from "@/assets/Collections/Pearlish-Assortments.jpg";
import PearlOfFive from "@/assets/Collections/Pearls-of-5.jpg";
import PearlyElegance from "@/assets/Collections/Pearly-Elegance.jpg";
import PremiumFloraBracelet from "@/assets/Collections/Premium-Flora-Bracelet.jpg";
import RapunzelBracelet from "@/assets/Collections/Rapunzel-Bracelet.jpg";
import RosyPinkCrackles from "@/assets/Collections/Rosy-Pink-Crackles-Bracelet.jpg";
import SnowWhiteCrackles from "@/assets/Collections/Snow-White-Crackles-Bracelet.jpg";
import ThunderBracelet from "@/assets/Collections/Thunder-Bracelet.jpg";
import TransperentCrackles from "@/assets/Collections/Transperent-Crackles-Bracelet.jpg";
import UncutLavenderBracelet from "@/assets/Collections/Uncut-Lavender-Bracelet.jpg";
import UnicormSeaShell from "@/assets/Collections/Unicorn-Sea-Shell-Bracelet.jpg";
import ViridianGold from "@/assets/Collections/Viridian-Gold-Bracelet.jpg";
import WordiesBracelet from "@/assets/Collections/Wordies-Bracelet.jpg";

type ProductDescription = {
    beads: string;
    stringing_Material: string;
    Charm?: string; // Optional
    Material_Colour?: string; // Optional
    
  };
  
  type Product = {
    id: number;
    name: string;
    price: number;
    desc: ProductDescription;
    image: StaticImageData;
    link: string;
  };
  

const Products : {
    [key: string]: {
      categoryName: string;
      categoryImage: StaticImageData;
      products: Product[];
    };
  } = {
  category1: {
    categoryName: "Pearl Bracelets",
    categoryImage: PearlOfFive,
    products: [
      {
        id: 1,
        name: "Pearls of 5",
        price: 59,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Stainless steel",
          Material_Colour: "Silver",
        },
        image: PearlOfFive,
        link: 'https://wa.me/p/28551194451138636/919384772182',
      },
      {
        id: 2,
        name: "Classic Pearl bracelet",
        price: 69,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread",
          Charm: "Butterfly",
        },
        image: ClassicPearlBracelets,
        link: 'https://wa.me/p/28045929628387760/919384772182',
      },
      {
        id: 3,
        name: "Pearly Elegance",
        price: 59,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread with steel",
          Material_Colour: "Silver",
        },
        image: PearlyElegance,
        link: 'https://wa.me/p/8672085752900237/919384772182',
      },
      {
        id: 4,
        name: "Mixed Pearl Bracelets",
        price: 69,
        desc: { beads: "Pearl Beads", stringing_Material: "Nylon thread" },
        image: MixedPearlBracelet,
        link: 'https://wa.me/p/9174583845939694/919384772182',
      },
      {
        id: 5,
        name: "Pearlish Assortments",
        price: 69,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread",
          Charm: "Mapple leaf and Butterfly",
        },
        image: PearlishAssortments,
        link: 'https://wa.me/p/28544395785151646/919384772182',
      },
      {
        id: 6,
        name: "Pearl and Hearts",
        price: 59,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread with steel",
          Charm: "Little hearts",
        },
        image: PearlAndHearts,
        link: 'https://wa.me/p/8929103310476402/919384772182',
      },
      {
        id: 7,
        name: "Golden Pearls",
        price: 59,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread with steel",
          Material_Colour: "Gold",
        },
        image: GoldenPearls,
        link: 'https://wa.me/p/28163614259919799/919384772182',
      },
      {
        id: 8,
        name: "Pearl Tulip",
        price: 69,
        desc: {
          beads: "Pearl Beads",
          stringing_Material: "Nylon thread",
          Charm: "Tulip",
        },
        image: PearlTulip,
        link: 'https://wa.me/p/28050939451216846/919384772182',
      },
      {
        id: 9,
        name: "Adjustable Pearlet",
        price: 69,
        desc: { beads: "Pearl Beads", stringing_Material: "Stainless steel" },
        image: AdjustablePearlet,
        link: 'https://wa.me/p/9324907284242728/919384772182',
      },
    ],
  },
  category2: {
    categoryName: "Crackle Bracelets",
    categoryImage: TransperentCrackles,
    products: [
      {
        id: 10,
        name: "Icy Blue Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: IcyBlueCrackles,
        link: 'https://wa.me/p/9063625070370518/919384772182',
      },
      {
        id: 11,
        name: "Black Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: BlackCracklesBracelet,
        link: 'https://wa.me/p/9297246306985554/919384772182',
      },
      {
        id: 12,
        name: "Rosy Pink Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: RosyPinkCrackles,
        link: 'https://wa.me/p/27920386297604925/919384772182',
      },
      {
        id: 13,
        name: "Snow White Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: SnowWhiteCrackles,
        link: 'https://wa.me/p/9662162610479031/919384772182',
      },
      {
        id: 14,
        name: "Transperent Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: TransperentCrackles,
        link: 'https://wa.me/p/8941120946008393/919384772182',
      },
      {
        id: 15,
        name: "Cherry Red Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: CherryRedCrackles,
        link: 'https://wa.me/p/9275661245812154/919384772182',
      },
      {
        id: 16,
        name: "Lavender Crackles Bracelet",
        price: 59,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: LavenderCrackles,
        link: 'https://wa.me/p/9115032638575149/919384772182',
      },
      {
        id: 17,
        name: "Black Crackles with Silver Sugar Beads Bracelet",
        price: 69,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: BlackCracklesWithSugarBeads,
        link: 'https://wa.me/p/9367609426631296/919384772182',
      },
      {
        id: 18,
        name: "Blue Crackles with Golden Sugar Beads Bracelet",
        price: 69,
        desc: { beads: "Crackle Beads", stringing_Material: "Nylon thread" },
        image: BlueCracklesWithSugarBeads,
        link: 'https://wa.me/p/9107706242609033/919384772182',
      },
      {
        id: 19,
        name: "Crackles with Custom Charm",
        price: 139,
        desc: {
          beads: "Crackle Beads",
          stringing_Material: "Nylon thread",
          Charm: "Maple leaf",
        },
        image: CracklesWithCustomCharm,
        link: 'https://wa.me/p/8479057768867549/919384772182',
      },
      {
        id: 20,
        name: "Magnet Heart Crackles Bracelet",
        price: 199,
        desc: {
          beads: "Crackle Beads",
          stringing_Material: "Nylon thread",
          Charm: "Maple leaf",
        },
        image: MagnetHeartCrackles,
        link: 'https://wa.me/p/9255749274512502/919384772182',
      },
    ],
  },
  category3: {
    categoryName: "Jelly Beads Bracelets",
    categoryImage: DaisyjellyBeads,
    products: [
        {
            id: 21,
            name: 'Black and Pink Jelly Beads Bracelet',
            price: 59,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread'},
            image: BlackAndPinkJellyBeads,
            link: 'https://wa.me/p/28516120884668119/919384772182',
        },
        {
            id: 22,
            name: 'Black and White Jelly Beads Bracelet',
            price: 59,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread'},
            image: BlackAndWhiteJellyBeads,
            link: 'https://wa.me/p/9264290580295679/919384772182',
        },
        {
            id: 23,
            name: 'Daisy Jelly Beads Bracelet',
            price: 59,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread',Charm:'Daisy'},
            image: DaisyjellyBeads,
            link: 'https://wa.me/p/28015226498125746/919384772182',
        },
        {
            id: 24,
            name: 'Magnetic Heart Jelly Beads Bracelet',
            price: 189,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread',Charm:'Magnetic Heart'},
            image: MagneticHeartJellyBeads,
            link: 'https://wa.me/p/8943915959032785/919384772182',
        },
        {
            id: 25,
            name: 'Pastel Jelly Beads Bracelet',
            price: 49,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread'},
            image: PastelJellyBeads,
            link: 'https://wa.me/p/28230161996598683/919384772182',
        },
        {
            id: 26,
            name: 'Marshmallow Bracelet',
            price: 69,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread'},
            image: MarshmallowBracelet,
            link: 'https://wa.me/p/8975130969201560/919384772182',
        },
    ],
  },
  category4: {
    categoryName: "Luxury Bracelets",
    categoryImage: ViridianGold,
    products: [
        {
            id: 27,
            name: 'Viridian Gold Bracelet',
            price: 299,
            desc:{beads:'Premium Crackle Beads',stringing_Material:'Nylon thread with Steel',Material_Colour:'Gold'},
            image: ViridianGold,
            link: 'https://wa.me/p/9148869015197756/919384772182',
        },
        {
            id: 28,
            name: 'Uncut Lavender Bracelet',
            price: 349,
            desc:{beads:'Stone Beads',stringing_Material:'Nylon thread',Material_Colour:'Gold'},
            image: UncutLavenderBracelet,
            link: 'https://wa.me/p/8935155836604605/919384772182',
        },
        {
            id: 29,
            name: 'Premium Flora Bracelet',
            price: 399,
            desc:{beads:'Premium Jelly Beads',stringing_Material:'Nylon thread with Steel',Material_Colour:'Gold'},
            image: PremiumFloraBracelet,
            link: 'https://wa.me/p/9034206163360905/919384772182',
        },
        {
            id: 30,
            name: 'Unicorn Sea Shell Bracelet',
            price: 199,
            desc:{beads:'Premium Crackle Beads',stringing_Material:'Nylon thread with steel',Charm:'Sea Shell'},
            image: UnicormSeaShell,
            link: 'https://wa.me/p/8808694745894577/919384772182',
        },
        {
            id: 31,
            name: 'Rapunzel Bracelet',
            price: 399,
            desc:{beads:'Stone Beads',stringing_Material:'Nylon thread eith steel',Material_Colour:'Gold'},
            image: RapunzelBracelet,
            link: 'https://wa.me/p/8823939787728580/919384772182',
        },
        {
            id: 32,
            name: 'Ariel Bracelet',
            price: 399,
            desc:{beads:'Stone Beads',stringing_Material:'Nylon thread With Steel',Material_Colour:'Gold'},
            image: ArielBracelet,
            link: 'https://wa.me/p/9731893843507010/919384772182',
        },
        {
            id: 33,
            name: 'Juliette Bracelet',
            price: 399,
            desc:{beads:'Crackle and Pearl Beads',stringing_Material:'Nylon thread'},
            image: JulietteBracelet,
            link: 'https://wa.me/p/8998903123557618/919384772182',
        },
    ],
  },
  category5: {
    categoryName: "Name Bracelets",
    categoryImage: PearlNamiezBlack,
    products: [
        {
            id: 34,
            name: 'Pearl Namiez Black Bracelet',
            price: 69,
            desc:{beads:'Pearl Beads',stringing_Material:'Nylon thread',},
            image: PearlNamiezBlack,
            link: 'https://wa.me/p/9116327348402880/919384772182',
        },
        {
            id: 35,
            name: 'Black Namiez White Bracelet',
            price: 69,
            desc:{beads:'Black Beads',stringing_Material:'Nylon thread',},
            image: BlackNameizBracelet,
            link: 'https://wa.me/p/28630323366566221/919384772182',
        },
        {
            id: 36,
            name: 'Wordies Bracelet',
            price: 79,
            desc:{beads:'Pearl Beads',stringing_Material:'Nylon thread',},
            image: WordiesBracelet,
            link: 'https://wa.me/p/9623301617704547/919384772182',
        },
        {
            id: 37,
            name: 'Namiez Heart Bracelet',
            price: 79,
            desc:{beads:'Jelly Beads',stringing_Material:'Nylon thread',},
            image: NamiezHeartBracelet,
            link: 'https://wa.me/p/9876151069065047/919384772182',
        },
    ],
  },
  category6: {
    categoryName: "Bond Bracelets",
    categoryImage: ThunderBracelet,
    products: [
        {
            id: 38,
            name: 'Thunder Bracelet',
            price: 69,
            desc:{beads:'Polish Beads',stringing_Material:'Nylon thread',},
            image: ThunderBracelet,
            link: '',
        },
        {
            id: 39,
            name: 'Charmer Bracelet',
            price: 79,
            desc:{beads:'Milky Beads',stringing_Material:'Nylon thread',},
            image: CharmerBracelet,
            link: 'https://wa.me/p/9309488002440589/919384772182',
        },
        {
            id: 40,
            name: 'Aura Bracelet',
            price: 89,
            desc:{beads:'Polish Tile Beads',stringing_Material:'Nylon thread',},
            image: AuraBracelet,
            link: 'https://wa.me/p/28207244705589502/919384772182',
        },
        {
            id: 41,
            name: 'Bro Code Bracelet',
            price: 129,
            desc:{beads:'Ploish Tile Beads',stringing_Material:'Nylon thread',Charm:'Magnetic Heart'},
            image: BroCodeBracelet,
            link: 'https://wa.me/p/28132111693103585/919384772182',
        },
        {
          id: 41,
          name: 'Black and White Bracelet',
          price: 79,
          desc:{beads:'Ploish Tile Beads',stringing_Material:'Nylon thread'},
          image: BlackAndWhiteBracelet,
          link: 'https://wa.me/p/28132111693103585/919384772182',
        },
    ],
  },

//   category7: {
//     categoryName: "Heart Charm Bracelets",
//     categoryImage: product1,
//     products: [
//       {
//         id: 13,
//         name: "Heart Charm Bracelet 1",
//         price: 130,
//         image: product1,
//       },
//       {
//         id: 14,
//         name: "Heart Charm Bracelet 2",
//         price: 140,
//         image: product2,
//       },
//     ],
//   },


//   category8: {
//     categoryName: "Flower Charm Bracelets",
//     categoryImage: product3,
//     products: [
//       {
//         id: 15,
//         name: "Flower Charm Bracelet 1",
//         price: 125,
//         image: product3,
//       },
//       {
//         id: 16,
//         name: "Flower Charm Bracelet 2",
//         price: 135,
//         image: product4,
//       },
//     ],
//   },

};

export default Products;
