import type { StaticImageData } from "next/image";
import cikasGure from "@/public/ig/cikas-gure.jpg";
import furnizimPalma from "@/public/ig/furnizim-palma.jpg";
import jukaVazo from "@/public/ig/juka-vazo.jpg";
import kopshtNate from "@/public/ig/kopsht-nate.jpg";
import tarraceBime from "@/public/ig/tarrace-bime.jpg";
import tarraceVinc from "@/public/ig/tarrace-vinc.jpg";
import ulliFushe from "@/public/ig/ulli-fushe.jpg";
import ulliNate from "@/public/ig/ulli-nate.jpg";
import ulliVinc from "@/public/ig/ulli-vinc.jpg";
import vazoSera from "@/public/ig/vazo-sera.jpg";
import vazoTeBardha from "@/public/ig/vazo-te-bardha.jpg";

// All page copy, products and photography in one place, so the concept is easy to edit.
// /ig photos come from the @luxury_gardenn Instagram posts (small reel covers: ask the
// client for originals). Unsplash photos fill product types Instagram doesn't show yet.

// Local photos are static imports, so next/image knows their size and makes a
// blurred placeholder that shows while the full photo loads.
const ig = {
  "cikas-gure": cikasGure,
  "furnizim-palma": furnizimPalma,
  "juka-vazo": jukaVazo,
  "kopsht-nate": kopshtNate,
  "tarrace-bime": tarraceBime,
  "tarrace-vinc": tarraceVinc,
  "ulli-fushe": ulliFushe,
  "ulli-nate": ulliNate,
  "ulli-vinc": ulliVinc,
  "vazo-sera": vazoSera,
  "vazo-te-bardha": vazoTeBardha,
};

export type PhotoSrc = string | StaticImageData;
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=900&q=80`;

export const brand = {
  name: "Luxury Garden",
  phone: "+355 69 776 2580",
  phoneHref: "tel:+355697762580",
  // WhatsApp number in international format, digits only.
  whatsappNumber: "355697762580",
  instagram: "https://www.instagram.com/luxury_gardenn/",
  handle: "@luxury_gardenn",
  followers: "29.3K",
  maps: "https://maps.app.goo.gl/7XKfm1PQHeznwza3A",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// The other pages of the site. They are not built yet, so links to them do
// nothing (see PageLink). Set ready: true once a page exists.
export const pages = {
  home: { href: "/", label: "Kryefaqja", ready: true },
  produktet: { href: "/produktet", label: "Produktet", ready: false },
  koleksioni: { href: "/koleksioni", label: "Koleksioni", ready: false },
  rrethNesh: { href: "/rreth-nesh", label: "Rreth nesh", ready: false },
  kontakt: { href: "/kontakt", label: "Kontakt", ready: false },
} as const;

export type PageKey = keyof typeof pages;

export const navPages: PageKey[] = ["home", "produktet", "koleksioni", "rrethNesh", "kontakt"];

export const photos = {
  oliveNight: { src: ig["ulli-nate"], alt: "Ulli shekullor i ndriçuar natën në një kopsht me bar" },
  gardenNight: { src: ig["kopsht-nate"], alt: "Kopsht pranë murit me pemë, juka dhe ndriçim natën" },
  whiteVases: { src: ig["vazo-te-bardha"], alt: "Tri vazo të bardha me reliev gjethesh" },
  nursery: { src: ig["vazo-sera"], alt: "Serrë me rafte plot vazo në ngjyra dheu dhe guri" },
  oliveField: { src: ig["ulli-fushe"], alt: "Ulli i vjetër në fushë nën qiell me re" },
  oliveCrane: { src: ig["ulli-vinc"], alt: "Ulli i madh me rrënjë duke u ngritur me vinç në kamion" },
  rooftopCrane: { src: ig["tarrace-vinc"], alt: "Vinç që ngre një vazo të madhe në tarracë në perëndim të diellit" },
  yucca: { src: ig["juka-vazo"], alt: "Juka në një vazo të rrumbullakët guri me zhavorr" },
  terrace: { src: ig["tarrace-bime"], alt: "Oleandër dhe bimë të gjelbra në vazo të zeza në një tarracë natën" },
  palms: { src: ig["furnizim-palma"], alt: "Kamionë të ngarkuar me palma dhe pemë dekorative" },
  cycas: { src: ig["cikas-gure"], alt: "Cikas në një shtrat me gurë të bardhë lumi pranë një ndërtese" },
};

export type Category = "peme" | "bime" | "vazo" | "lule";

export const categories: {
  id: Category;
  label: string;
  text: string;
  photo: { src: PhotoSrc; alt: string };
}[] = [
  { id: "peme", label: "Pemë dekorative", text: "Ullinj shekullorë, limonë, selvi", photo: photos.oliveNight },
  { id: "bime", label: "Bimë dhe palma", text: "Palma, cikas, juka, oleandër", photo: photos.cycas },
  { id: "vazo", label: "Vazo", text: "Qeramikë, gur, fibër, terrakotë", photo: photos.nursery },
  {
    id: "lule",
    label: "Lule natyrale",
    text: "Lule kopshti dhe buqeta me porosi",
    photo: { src: unsplash("1529916005909-d8be62bd4935"), alt: "Lule bugenvile në ngjyrë rozë" },
  },
];

export type Product = {
  name: string;
  category: Category;
  detail: string;
  tag?: string;
  photo: { src: PhotoSrc; alt: string };
};

export const products: Product[] = [
  { name: "Ulli shekullor", category: "peme", detail: "Olea europaea, trung i vjetër, për oborre dhe hyrje", tag: "Nënshkrimi ynë", photo: photos.oliveField },
  { name: "Ulli në vazo terrakote", category: "peme", detail: "Gati për tarracë ose hyrje", photo: { src: unsplash("1683320553264-e31acd4196e7"), alt: "Ulli në një vazo të madhe terrakote para një ndërtese guri" } },
  { name: "Limon dekorativ", category: "peme", detail: "Citrus × limon, me fruta, në vazo", photo: { src: unsplash("1680413557185-2a3da954bbe8"), alt: "Pemë limoni me fruta në vazo terrakote" } },
  { name: "Selvi italiane", category: "peme", detail: "Cupressus sempervirens, për rreshta dhe gardhe", photo: { src: unsplash("1706269771866-728009e647a3"), alt: "Rresht selvish të gjata përgjatë një rruge" } },

  { name: "Yucca rostrata", category: "bime", detail: "Në vazo guri të rrumbullakët, me zhavorr", photo: photos.yucca },
  { name: "Cikas", category: "bime", detail: "Cycas revoluta, për shtretër me gurë dhe vazo", photo: photos.cycas },
  { name: "Palma", category: "bime", detail: "Lloje të ndryshme, me pakicë dhe shumicë", photo: photos.palms },
  { name: "Oleandër në vazo", category: "bime", detail: "Lulëzon gjatë gjithë verës, për tarraca", photo: photos.terrace },

  { name: "Vazo me reliev gjethesh", category: "vazo", detail: "E bardhë, në 3 përmasa, për brenda dhe jashtë", photo: photos.whiteVases },
  { name: "Vazo guri dhe fibre", category: "vazo", detail: "Ngjyra dheu, gri dhe bezhë, shumë forma", photo: photos.nursery },
  { name: "Vazo terrakote", category: "vazo", detail: "Argjilë e punuar me dorë, forma klasike", photo: { src: unsplash("1510828561531-05a3388f6d3d"), alt: "Tri vazo terrakote në forma të ndryshme" } },
  { name: "Amforë dekorative", category: "vazo", detail: "Për hyrje, tarraca dhe kopshte mesdhetare", photo: { src: unsplash("1783266256625-441d0dce31b9"), alt: "Amforë argjile mbi një stol druri pranë një muri" } },

  { name: "Bugenvile", category: "lule", detail: "Kacavjerrëse, lulëzon nga pranvera në vjeshtë", photo: { src: unsplash("1529916005909-d8be62bd4935"), alt: "Lule bugenvile rozë" } },
  { name: "Hortensia", category: "lule", detail: "Blu, rozë ose e bardhë, për kënde me hije", photo: { src: unsplash("1621518856558-9b2ce2d0660d"), alt: "Lule hortensie blu dhe vjollcë" } },
  { name: "Livandë", category: "lule", detail: "Në vazo, për bordura, shtigje dhe tarraca", photo: { src: unsplash("1779440158884-fd28651b15dc"), alt: "Livandë në vazo pranë dritares" } },
  { name: "Buqeta me porosi", category: "lule", detail: "Për dhurata, hotele dhe evente", photo: { src: unsplash("1523693916903-027d144a2b7d"), alt: "Buqetë me trëndafila rozë dhe të bardhë" } },
];

export const services = [
  {
    title: "Projektim kopshti",
    text: "Studim i terrenit, plan mbjelljeje, ndriçim dhe ujitje, që ta shihni kopshtin para se të fillojë puna.",
    points: ["Studim i terrenit", "Plan mbjelljeje dhe ndriçimi", "Sistem ujitjeje"],
    photo: photos.gardenNight,
    icon: "plan",
  },
  {
    title: "Zbatim dhe mbjellje",
    text: "Pemë dhe vazo të mëdha transportohen e ngrihen me vinç, deri në tarracë, dhe mbillen nga ekipi ynë.",
    points: ["Pemë të mëdha dhe shekullore", "Transport me vinç", "Mbjellje nga ekipi ynë"],
    photo: photos.rooftopCrane,
    icon: "crane",
  },
  {
    title: "Mirëmbajtje",
    text: "Krasitje, plehërim, kontroll i ujitjes dhe formësim i bimëve, me vizita të rregullta gjatë gjithë vitit.",
    points: ["Vizita javore ose mujore", "Krasitje dhe formësim", "Kujdes sipas stinës"],
    photo: photos.terrace,
    icon: "care",
  },
] as const;

export const steps = [
  { title: "Konsultimi", text: "Na shkruani ose telefononi. Vijmë në vend dhe dëgjojmë çfarë dëshironi." },
  { title: "Projekti dhe oferta", text: "Ju sjellim planin, pemët dhe vazot e propozuara, me çmim të qartë." },
  { title: "Zbatimi", text: "Ekipi ynë transporton, mbjell dhe vendos ujitjen dhe ndriçimin." },
  { title: "Mirëmbajtja", text: "Kujdesemi që kopshti të mbetet i bukur, stinë pas stine." },
];

const reel = (id: string) => `https://www.instagram.com/luxury_gardenn/reel/${id}/`;

export const reels = [
  { title: "Ulli shekullor, i ndriçuar natën", photo: photos.oliveNight, href: reel("De2H-cjN_sm") },
  { title: "Kopsht me ndriçim", photo: photos.gardenNight, href: reel("De2JQnytMJq") },
  { title: "Zhvendosja e një ulliri", photo: photos.oliveCrane, href: reel("Depa_r8NYz9") },
  { title: "Vazo deri në tarracë", photo: photos.rooftopCrane, href: reel("DecWwLGt_VW") },
  { title: "Cikas me gurë lumi", photo: photos.cycas, href: reel("DeOuSKGtdQZ") },
  { title: "Vazo me reliev gjethesh", photo: photos.whiteVases, href: reel("DZNFlNiNEkV") },
  { title: "Serra e vazove", photo: photos.nursery, href: reel("DRANbOPDfpu") },
  { title: "Furnizim me palma", photo: photos.palms, href: reel("DeR3SpptxfP") },
];

export const values = [
  { title: "Gjithçka në një vend", text: "Pemë, bimë, lule dhe vazo, bashkë me projektimin dhe mbjelljen." },
  { title: "Pakicë dhe shumicë", text: "Për shtëpinë tuaj, ose për hotele, restorante dhe kantiere." },
  { title: "Ekipi dhe makineritë tona", text: "Transportojmë dhe mbjellim edhe pemët më të mëdha, me vinç." },
];

// The ribbon under the hero: what we grow and do, each with a small photo.
export const marquee = [
  { label: "Ullinj shekullorë", photo: photos.oliveField },
  { label: "Vazo artizanale", photo: photos.whiteVases },
  { label: "Palma", photo: photos.palms },
  { label: "Lule natyrale", photo: categories[3].photo },
  { label: "Projektim kopshtesh", photo: photos.gardenNight },
  { label: "Cikas dhe juka", photo: photos.yucca },
  { label: "Transport me vinç", photo: photos.oliveCrane },
  { label: "Mirëmbajtje", photo: photos.terrace },
];
