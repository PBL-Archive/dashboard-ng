import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {

  data: any = [];
  permalink: any = [];
  name: any = [];
  homepage_url: any = [];
  category_list: any = [];
  market: any = [];
  funding_total_usd: any = [];
  status: any = [];
  country_code: any = [];
  state_code: any = [];
  region: any = [];
  city: any = [];
  funding_rounds: any = [];
  founded_at: any = [];
  founded_month: any = [];
  founded_quarter: any = [];
  founded_year: any = [];
  first_funding_at: any = [];
  last_funding_at: any = [];
  seed: any = [];
  venture: any = [];
  equity_crowdfunding: any = [];
  undisclosed: any = [];
  convertible_note: any = [];
  debt_financing: any = [];
  angel: any = [];
  grant: any = [];
  private_equity: any = [];
  post_ipo_equity: any = [];
  post_ipo_debt: any = [];
  secondary_market: any = [];
  product_crowdfunding: any = [];
  round_A: any = [];
  round_B: any = [];
  round_C: any = [];
  round_D: any = [];
  round_E: any = [];
  round_F: any = [];
  round_G: any = [];
  round_H: any = [];

  constructor() {}

  SetValues(data) {
    this.data = data;
    this.permalink = data.map((d) => d.permalink);
    this.name = data.map((d) => d.name);
    this.homepage_url = data.map((d) => d.homepage_url);
    this.category_list = data.map((d) => d.category_list);
    this.market = data.map((d) => d.market);
    this.funding_total_usd = data.map((d) => d.funding_total_usd);
    this.status = data.map((d) => d.status);
    this.country_code = data.map((d) => d.country_code);
    this.state_code = data.map((d) => d.state_code);
    this.region = data.map((d) => d.region);
    this.city = data.map((d) => d.city);
    this.funding_rounds = data.map((d) => d.funding_rounds);
    this.founded_at = data.map((d) => d.founded_at);
    this.founded_month = data.map((d) => d.founded_month);
    this.founded_quarter = data.map((d) => d.founded_quarter);
    this.founded_year = data.map((d) => d.founded_year);
    this.first_funding_at = data.map((d) => d.first_funding_at);
    this.last_funding_at = data.map((d) => d.last_funding_at);
    this.seed = data.map((d) => d.seed);
    this.venture = data.map((d) => d.venture);
    this.equity_crowdfunding = data.map((d) => d.equity_crowdfunding);
    this.undisclosed = data.map((d) => d.undisclosed);
    this.convertible_note = data.map((d) => d.convertible_note);
    this.debt_financing = data.map((d) => d.debt_financing);
    this.angel = data.map((d) => d.angel);
    this.grant = data.map((d) => d.grant);
    this.private_equity = data.map((d) => d.private_equity);
    this.post_ipo_equity = data.map((d) => d.post_ipo_equity);
    this.post_ipo_debt = data.map((d) => d.post_ipo_debt);
    this.secondary_market = data.map((d) => d.secondary_market);
    this.product_crowdfunding = data.map((d) => d.product_crowdfunding);
    this.round_A = data.map((d) => d.round_A);
    this.round_B = data.map((d) => d.round_B);
    this.round_C = data.map((d) => d.round_C);
    this.round_D = data.map((d) => d.round_D);
    this.round_E = data.map((d) => d.round_E);
    this.round_F = data.map((d) => d.round_F);
    this.round_G = data.map((d) => d.round_G);
    this.round_H = data.map((d) => d.round_H);
  }
}
