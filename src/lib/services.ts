import { Drill, Anchor, Layers, FlaskConical, Cog, Briefcase, type LucideIcon } from "lucide-react";
import drillBits from "@/assets/drill-bits-gold.png";
import drillb from "@/assets/drill-bits.webp";
import drillbits1 from "@/assets/drillbits-1.jpg";
import pdcBit from "@/assets/pdc-bit.png";
import downhole from "@/assets/downhole-tools.png";
import mill from "@/assets/xpressdrill-mill.png.webp";
import hookup from "@/assets/xpressdrill-hookup.png.webp";
import whipstock from "@/assets/whipstock.png";
import machine1 from "@/assets/machine1.jpeg";
import repair from "@/assets/repair1.png";
import repair1 from "@/assets/repair.jpeg";
import centralizers from "@/assets/centralizers.png";
import floatEq from "@/assets/float-equipment.png";
import chemicals from "@/assets/chemicals.jpeg";
import xpress from "@/assets/xpresscat.webp";
import repairlil from "@/assets/repairlil.jpeg";
import octg from "@/assets/octg-pipes.png";
import welding from "@/assets/welding.png";
import wildcatLogo from "@/assets/wildcat-logo.jpg";
import xpressLogo from "@/assets/xpressdrill-logo.jpg";
import xpressAssembly from "@/assets/xpressdrill-assembly.jpg";
import xpressComponents from "@/assets/xpressdrill-components.jpg";
import engineers from "@/assets/engineers.jpg";
import consultancy from "@/assets/consultancy.jpg";
export type ServiceSection = { heading: string; body: string; subText?: string; image?: string[]; bullets?:  { t: string; d: string }[] };
export type SpecTable = { title: string; rows: { k: string; v: string }[] };
export type SpecSheet = {
  title: string;
  intro: string;
  brandLogo: string;
  productLogo?: string;
  diagram?: string;
  diagramAlt?: string;
  tables: SpecTable[];
  footer?: string;
 
};
export type Service = {
  slug: string;
  productLine: string;
  title: string;
  short: string;
  cover: string;
  gallery: string[];
  icon: LucideIcon;
  tag: string;
  sections: ServiceSection[];
  specSheet?: SpecSheet;
};

export const SERVICES: Service[] = [
  {
    slug: "drill-bits",
    productLine: "Drilling Tools",
    title: "Drill Bits, Drilling Optimization Tools & Reamers",
    short: "PDC Bits, Roller Cone Bits, Bi-Center Bits, Staged Hole Openers.",
    cover: pdcBit,
    gallery: [],
    icon: Drill,
    tag: "OEM Rep",
    sections: [
      {
        heading: "Drill Bits: PDC & Roller Cones",
        image: [drillBits, drillbits1, drillb],
        body: "We are PDC & Roller Cones representative in Nigeria and the Sub-Sahara Africa market for Drill Bits, Drilling Optimization Tools and Reamers. Our partners have combined industry experience of over 30 years for design, manufacture and technical support.",
        bullets: [
          { t: "PDC Drill Bits", d: "Steel & Matrix Body" },
          { t: "Roller Cone Bits", d: "Milled Tooth & TCI" },
          { t: "Bi-Center Bits", d: "Specialized Applications" },
          { t: "Staged Hole Openers", d: "Hole Enlargement" },
        ],
      },
      
      {
        heading: "Drilling Optimization",
        image: [],
        body: "Our range of Drilling Optimization Tools includes vibration and shock mitigation tools that improve drilling efficiency and reduce non-productive time.",
      },
      {
        heading: "PDC Bits Repair Services",
        image: [welding, repair1, repairlil],
        body: "We offer PDC bits repairs at pocket-friendly costs, extending the life of your drilling tools and reducing operational expenses.",
        bullets: [
          { t: "Cutter Turning", d: "Damaged PDC Cutters" },
          { t: "Re-brazing", d: "Thread Repairs" },
          { t: "Full PDC Bit Refurbishment", d: "End-to-end restoration" },

        ]
      },
    ],
    
  },
  {
    slug: "fishing-whipstock",
    productLine: "Fishing & Whipstock",
    title: "Fishing Operations & Whipstock Services",
    short: "Comprehensive remedial services. Sole representative of Wildcat Oil Tools' XpressDrill in Nigeria.",
    cover: xpress,
    gallery: [hookup,octg, mill],
    icon: Anchor,
    tag: "Sole Rep",
    sections: [
      {
        heading: "Comprehensive Remedial Services",
        image: [],
        body: "Together with our Offshore Technical Partners, who are world-class renowned manufacturers of Whipstocks, Mills (Tri-mills and Bi-Mills), Anchors and Packer Assembly, we carry out all forms of remedial services.",
        bullets: [
          { t: "Fishing Operations", d: "Lost equipment recovery" },
          { t: "Whipstock Services", d: "Wellbore departure" },
          { t: "Cut & Pull", d: "Casing removal" },
          { t: "Plug & Abandonment", d: "Well decommissioning" },
        ],
      },
      {
        heading: "Sole Representative in Nigeria - Xpressdrill Technology Developed By Wildcat Oil Tools",
        subText: "Available sizes - 13 3/8”, 9 5/8” and 7”",
        body:
          
          "E&R Global Resources Ltd is the Sole Representative of Wildcat Oil Tools' XpressDrill Wellbore Departure System in Nigeria. Developed by Wildcat Oil Tools, USA — established 2012, ISO 9001:2015 certified, with 500+ years combined industry experience.",
        bullets: [
          { t: "True Single-Trip", d: "RIH, orient, set & mill" },
          { t: "Multi-Slip Anchor", d: "Enhanced wall contact" },
          { t: "Ball-Drop Activation", d: "Proven cement system" },
          { t: "2.5° Engineered Slide", d: "Reduced dogleg severity" },
        ],
      },
      {
        heading: "Expert Technical Team",
        body: "Our in-country field engineers and technicians acquired international trainings and are one of the best hands in the industry for fishing operations, setting of whipstocks, cut and pull jobs and every other remedial services.",
      },
    ],
    specSheet: {
      title: '',
      intro:
        "The XpressDrill™ wellbore departure system provides a reliable sidetrack across a wide variety of wellbore conditions and applications. Solid anchoring is achieved through the Extended Reach hydraulically set anchor. Bridge plugs, or other restrictions in the wellbore, are not required for successful operation. A 2.5-degree whipstock face ensures separation from the existing wellbore with minimal dogleg severity. The XpressMill™ milling assembly, dressed to full gauge with a combination of Premium PDC inserts and Tungsten Carbide, is designed to mill all casing grades and formations. Orientation can be achieved through MWD or Surface Read Gyro tools.",
      brandLogo: wildcatLogo,
      productLogo: xpressLogo,
      diagram: xpressComponents,
      diagramAlt: "XpressDrill tool assembly diagram",
      tables: [
        {
          title: "XpressDrill™ Whipstock Slide",
          rows: [
            { k: "Length", v: '210.0"' },
            { k: "Face Length", v: '152.4"' },
            { k: "OD", v: '8.00"' },
          ],
        },
        {
          title: "Extended Reach Hydraulic Anchor",
          rows: [
            { k: "Max Tool OD, in (retracted)", v: '8.00"' },
            { k: "Max Tool OD, in (extended)", v: '12.88"' },
            { k: "Length", v: '70.75"' },
            { k: "Push capacity, lbs.", v: "150,000" },
            { k: "Maximum torque, ft.lbf", v: "40,000" },
          ],
        },
        {
          title: "Running Tool",
          rows: [
            { k: "Length", v: '72.0"' },
            { k: "OD", v: '6.50"' },
            { k: "Connection up/down", v: "4-1/2 API IF BOX" },
          ],
        },
        {
          title: "By-Pass Valve",
          rows: [
            { k: "Length", v: '40.0"' },
            { k: "OD", v: '6.50"' },
            { k: "Connection up/down", v: "4-1/2 API IF BOX/ PIN" },
          ],
        },
        {
          title: "XpressMill™ Milling Assembly",
          rows: [
            { k: "Length", v: '102.0"' },
            { k: "Mill OD", v: '8.75" or 8.50"' },
            { k: "Fishing Neck OD", v: '6.50"' },
            { k: "Connection up", v: "4-1/2 API IF PIN" },
          ],
        },
      ],
      footer:
        "For more information, contact your local Wildcat Oil Tools representative or visit www.wildcatoiltools.com",
    },
  },
  {
    slug: "cementing-casing",
    productLine: "Cementing & Casing",
    title: "Cementing & Casing Accessories",
    short: "Centralizers, Float Equipment, Bridge Plugs, Stage Cementing Tools, Liner Hangers, Reamer Shoes.",
    cover: centralizers,
    gallery: [downhole, centralizers, floatEq],
    icon: Layers,
    tag: "Accessories",
    sections: [
      {
        heading: "Manufacturer's Representative",
        body: "We are manufacturer's representative for the delivery of cementing and liner hanger product accessories to the Nigerian Oil and Gas Market. This strategic partnership brings to the African market one of the best in terms of quality with pocket-friendly Cementing and Casing accessories.",
      },
      {
        heading: "Centralizers",
        body: "Different types of centralizers available, ranging from Hinged Welded & non-welded bow Spring centralizers to Single Piece Bow Centralizers.",
        bullets: [
          { t: "Hinged Welded", d: "Bow spring" },
          { t: "Non-Welded", d: "Bow spring" },
          { t: "Single Piece", d: "Bow centralizers" },
          { t: "Stop Collars", d: "Hinged & standard" },
        ],
      },
      {
        heading: "Float Equipment",
        body: "Single and double valve float shoe with and without down jet ports, reamer shoe, differential fill-up float shoe, non-rotating single & double valve float collar.",
        bullets: [
          { t: "Float Shoe & Collars", d: "Single & double valve" },
          { t: "Reamer Shoes", d: "Casing reamer solutions" },
          { t: "Top & Bottom Plugs", d: "PDC Drillable" },
        ],
      },
      {
        heading: "Bridge Plugs, Packers & Stage Cementing",
        body: "From Bridge Plugs to Cement Retainers, Packers, Snap Latch and Mechanical Setting tools — all are available. Stage Cementing Tools and different plugs for cement jobs deliver comprehensive solutions for multi-stage cementing operations.",
      },
    ],
  },
  {
    slug: "chemicals",
    productLine: "Drilling Chemicals",
    title: "Drilling & Production Chemicals",
    short: "Emulsifiers, Corrosion Inhibitors, Shale Inhibitors, Lubricants.",
    cover: chemicals,
    gallery: [chemicals],
    icon: FlaskConical,
    tag: "Eco-Friendly",
    sections: [
      {
        heading: "Environmental Commitment",
        body: "Our desire is to supply environmental friendly chemicals to the Oil and Gas industry. We are cost-effective, without compromising quality and safety.",
        bullets: [
          { t: "Environmental Friendly", d: "Minimized ecological impact" },
          { t: "Cost-Effective", d: "Competitive pricing without compromise" },
          { t: "High Quality", d: "Meeting international standards" },
          { t: "Safety First", d: "Rigorous safety protocols" },
        ],
      },
      {
        heading: "Why Our Chemicals?",
        body: "We understand the delicate balance between operational efficiency and environmental responsibility. Our chemical solutions are designed to maximize performance while minimizing environmental impact, ensuring compliance with international standards and local regulations.",
      },
      {
        heading: "Product Range",
        body: "A complete portfolio for drilling and production operations.",
        bullets: [
          { t: "Emulsifiers", d: "Stabilize oil-water mixtures for drilling fluids" },
          { t: "Corrosion Inhibitors", d: "Protect equipment from corrosive environments" },
          { t: "Shale Inhibitors", d: "Prevent shale swelling and wellbore instability" },
          { t: "Lubricants", d: "Reduce friction and torque in drilling operations" },
        ],
      },
      {
        heading: "Applications",
        body: "Drilling Operations · Production Enhancement · Well Completion · Workover Operations.",
      },
    ],
  },
  {
    slug: "octg-machine-shop",
    productLine: "OCTG & Machine Shop",
    title: "OCTG/Pipes & Machine Shop Services",
    short: "API Threading, Flanges, Cold Cutting, PDC bit cutter replacement & re-brazing.",
    cover: machine1,
    gallery: [machine1],
    icon: Cog,
    tag: "Precision",
    sections: [
      {
        heading: "OCTG/Pipes & Machine Shop Services",
        body: "We offer a wide range of services in the area of OCTG/Pipes as well as Machine Shop services with precision and quality.",
        bullets: [
          { t: "Threading", d: "API connections and Crossovers" },
          { t: "Flanges", d: "Manufacturing of all types" },
          { t: "Cold Cutting", d: "Precision cutting services" },
          { t: "Machine Shop", d: "All machining services" },
        ],
      },
      {
        heading: "Service Capabilities",
        body: "Full range of OCTG inspection and testing — pipe threading and connection manufacturing, custom flange production to specifications, precision cold cutting for all pipe sizes, and complete machine shop fabrication.",
      },
    ],
  },
  {
    slug: "consultancy-supply",
    productLine: "Consultancy & Supply",
    title: "Consultancy Services & Materials Supply",
    short: "Directional Drilling, Mud Engineering, Drilling Optimization, Material Supply.",
    cover: consultancy,
    gallery: [consultancy, engineers],
    icon: Briefcase,
    tag: "Expertise",
    sections: [
      {
        heading: "Consultancy Services",
        body: "We have a crew of experts that are readily available to proffer solutions to your drilling needs ranging from Directional Drilling, Mud Engineering and Drilling Optimization.",
        bullets: [
          { t: "Directional Drilling", d: "Expert advisory and execution" },
          { t: "Mud Engineering", d: "Fluid design and field support" },
          { t: "Drilling Optimization", d: "Performance enhancement" },
          { t: "Equipment Selection", d: "Right tool for the job" },
        ],
      },
      {
        heading: "Materials Supply",
        body: "We provide Equipment and materials supply from downhole tools to surface equipment, ensuring you have everything needed for successful operations.",
        bullets: [
          { t: "Downhole Tools", d: "Drill bits, motors, MWD/LWD" },
          { t: "Casing & Tubing", d: "All grades and specifications" },
          { t: "Surface Equipment", d: "Wellheads, valves, fittings" },
        ],
      },
    ],
  },
];
