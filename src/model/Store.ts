import {CouponOption} from "@/model/CouponOption";
import {Address} from "@/model/Address";

export class Store {
    id : string = '';
    name : string = '';
    description : string = '';
    website : string = '';
    email : string = '';
    telephone : string = '';
    logo : string = ''; //base64 or URL
    coverImage : string = ''; //base64 or URL
    thumbnail : string = ''; //base64 or URL
    couponOptions : CouponOption[] = [];
    address : Address | null = null;
    slogan : string = '';
    socialTwitter : string = '';
    socialFacebook : string = '';
    socialInstagram : string = '';

    constructor(id: string, name: string, description: string, website: string, email: string, logo: string, couponOptions: CouponOption[], address: Address | null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.website = website;
        this.email = email;
        this.logo = logo;
        this.couponOptions = couponOptions;
        this.address = address;
    }
}
