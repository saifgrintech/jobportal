import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <div className="contact_page">
            <Navbar />
            <div className="hero_banner d-flex flex-column align-items-center justify-content-center ">
                <h1 className='fw-bold position-relative'>Contact Us</h1>
           </div>
            <div className="container py-5">
                <div className="row align-items-center">
                <div className="col-lg-5 mx-auto">
                 <img src="/images/contact.jpg" className='w-100 rounded-3' alt="" />
                 </div>
                    <div className="col-lg-5 mx-auto">
                        <div id='signup_form' className="card shadow border-0">
                            <div className="card-body py-4">
                                <h3 className='mb-3 text-center'>Contact Us</h3>
                                <form  action="" className='px-3'>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Name <span>*</span></label>
                                            <input type="text" className='form-control' placeholder='Enter your name' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Email <span>*</span></label>
                                            <input type="email" className='form-control' placeholder='Enter your email' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Phone Number <span>*</span></label>
                                           <div className="phone-input-container row mb-3">
                                            <div className="col-3">
                                            <select className="optionSelection form-select" id="country-code" name="countryCode">
                                                <option value="+1">+1</option><option className="pt-3" value="+93">+93</option><option className="pt-3" value="+358">+358</option><option className="pt-3" value="+355">+355</option><option className="pt-3" value="+213">+213</option><option className="pt-3" value="+1684">+1684</option><option className="pt-3" value="+376">+376</option><option className="pt-3" value="+244">+244</option><option className="pt-3" value="+1264">+1264</option><option className="pt-3" value="+672">+672</option><option className="pt-3" value="+1268">+1268</option><option className="pt-3" value="+54">+54</option><option className="pt-3" value="+374">+374</option><option className="pt-3" value="+297">+297</option><option className="pt-3" value="+61">+61</option><option className="pt-3" value="+43">+43</option><option className="pt-3" value="+994">+994</option><option className="pt-3" value="+1242">+1242</option><option className="pt-3" value="+973">+973</option><option className="pt-3" value="+880">+880</option><option className="pt-3" value="+1246">+1246</option><option className="pt-3" value="+375">+375</option><option className="pt-3" value="+32">+32</option><option className="pt-3" value="+501">+501</option><option className="pt-3" value="+229">+229</option><option className="pt-3" value="+1441">+1441</option><option className="pt-3" value="+975">+975</option><option className="pt-3" value="+591">+591</option><option className="pt-3" value="+387">+387</option><option className="pt-3" value="+267">+267</option><option className="pt-3" value="+55">+55</option><option className="pt-3" value="+246">+246</option><option className="pt-3" value="+673">+673</option><option className="pt-3" value="+359">+359</option><option className="pt-3" value="+226">+226</option><option className="pt-3" value="+257">+257</option><option className="pt-3" value="+855">+855</option><option className="pt-3" value="+237">+237</option><option className="pt-3" value="+1">+1</option><option className="pt-3" value="+238">+238</option><option className="pt-3" value="+ 345">+ 345</option><option className="pt-3" value="+236">+236</option><option className="pt-3" value="+235">+235</option><option className="pt-3" value="+56">+56</option><option className="pt-3" value="+86">+86</option><option className="pt-3" value="+61">+61</option><option className="pt-3" value="+61">+61</option><option className="pt-3" value="+57">+57</option><option className="pt-3" value="+269">+269</option><option className="pt-3" value="+242">+242</option><option className="pt-3" value="+243">+243</option><option className="pt-3" value="+682">+682</option><option className="pt-3" value="+506">+506</option><option className="pt-3" value="+225">+225</option><option className="pt-3" value="+385">+385</option><option className="pt-3" value="+53">+53</option><option className="pt-3" value="+357">+357</option><option className="pt-3" value="+420">+420</option><option className="pt-3" value="+45">+45</option><option className="pt-3" value="+253">+253</option><option className="pt-3" value="+1767">+1767</option><option className="pt-3" value="+1849">+1849</option><option className="pt-3" value="+593">+593</option><option className="pt-3" value="+20">+20</option><option className="pt-3" value="+503">+503</option><option className="pt-3" value="+240">+240</option><option className="pt-3" value="+291">+291</option><option className="pt-3" value="+372">+372</option><option className="pt-3" value="+251">+251</option><option className="pt-3" value="+500">+500</option><option className="pt-3" value="+298">+298</option><option className="pt-3" value="+679">+679</option><option className="pt-3" value="+358">+358</option><option className="pt-3" value="+33">+33</option><option className="pt-3" value="+594">+594</option><option className="pt-3" value="+689">+689</option><option className="pt-3" value="+241">+241</option><option className="pt-3" value="+220">+220</option><option className="pt-3" value="+995">+995</option><option className="pt-3" value="+49">+49</option><option className="pt-3" value="+233">+233</option><option className="pt-3" value="+350">+350</option><option className="pt-3" value="+30">+30</option><option className="pt-3" value="+299">+299</option><option className="pt-3" value="+1473">+1473</option><option className="pt-3" value="+590">+590</option><option className="pt-3" value="+1671">+1671</option><option className="pt-3" value="+502">+502</option><option className="pt-3" value="+44">+44</option><option className="pt-3" value="+224">+224</option><option className="pt-3" value="+245">+245</option><option className="pt-3" value="+595">+595</option><option className="pt-3" value="+509">+509</option><option className="pt-3" value="+379">+379</option><option className="pt-3" value="+504">+504</option><option className="pt-3" value="+852">+852</option><option className="pt-3" value="+36">+36</option><option className="pt-3" value="+354">+354</option><option className="pt-3" value="+91">+91</option><option className="pt-3" value="+62">+62</option><option className="pt-3" value="+98">+98</option><option className="pt-3" value="+964">+964</option><option className="pt-3" value="+353">+353</option><option className="pt-3" value="+44">+44</option><option className="pt-3" value="+972">+972</option><option className="pt-3" value="+39">+39</option><option className="pt-3" value="+1876">+1876</option><option className="pt-3" value="+81">+81</option><option className="pt-3" value="+44">+44</option><option className="pt-3" value="+962">+962</option><option className="pt-3" value="+77">+77</option><option className="pt-3" value="+254">+254</option><option className="pt-3" value="+686">+686</option><option className="pt-3" value="+850">+850</option><option className="pt-3" value="+82">+82</option><option className="pt-3" value="+965">+965</option><option className="pt-3" value="+996">+996</option><option className="pt-3" value="+856">+856</option><option className="pt-3" value="+371">+371</option><option className="pt-3" value="+961">+961</option><option className="pt-3" value="+266">+266</option><option className="pt-3" value="+231">+231</option><option className="pt-3" value="+218">+218</option><option className="pt-3" value="+423">+423</option><option className="pt-3" value="+370">+370</option><option className="pt-3" value="+352">+352</option><option className="pt-3" value="+853">+853</option><option className="pt-3" value="+389">+389</option><option className="pt-3" value="+261">+261</option><option className="pt-3" value="+265">+265</option><option className="pt-3" value="+60">+60</option><option className="pt-3" value="+960">+960</option><option className="pt-3" value="+223">+223</option><option className="pt-3" value="+356">+356</option><option className="pt-3" value="+692">+692</option><option className="pt-3" value="+596">+596</option><option className="pt-3" value="+222">+222</option><option className="pt-3" value="+230">+230</option><option className="pt-3" value="+262">+262</option><option className="pt-3" value="+52">+52</option><option className="pt-3" value="+691">+691</option><option className="pt-3" value="+373">+373</option><option className="pt-3" value="+377">+377</option><option className="pt-3" value="+976">+976</option><option className="pt-3" value="+382">+382</option><option className="pt-3" value="+1664">+1664</option><option className="pt-3" value="+212">+212</option><option className="pt-3" value="+258">+258</option><option className="pt-3" value="+95">+95</option><option className="pt-3" value="+264">+264</option><option className="pt-3" value="+674">+674</option><option className="pt-3" value="+977">+977</option><option className="pt-3" value="+31">+31</option><option className="pt-3" value="+599">+599</option><option className="pt-3" value="+687">+687</option><option className="pt-3" value="+64">+64</option><option className="pt-3" value="+505">+505</option><option className="pt-3" value="+227">+227</option><option className="pt-3" value="+234">+234</option><option className="pt-3" value="+683">+683</option><option className="pt-3" value="+672">+672</option><option className="pt-3" value="+1670">+1670</option><option className="pt-3" value="+47">+47</option><option className="pt-3" value="+968">+968</option><option className="pt-3" value="+92">+92</option><option className="pt-3" value="+680">+680</option><option className="pt-3" value="+970">+970</option><option className="pt-3" value="+507">+507</option><option className="pt-3" value="+675">+675</option><option className="pt-3" value="+595">+595</option><option className="pt-3" value="+51">+51</option><option className="pt-3" value="+63">+63</option><option className="pt-3" value="+872">+872</option><option className="pt-3" value="+48">+48</option><option className="pt-3" value="+351">+351</option><option className="pt-3" value="+1939">+1939</option><option className="pt-3" value="+974">+974</option><option className="pt-3" value="+40">+40</option><option className="pt-3" value="+7">+7</option><option className="pt-3" value="+250">+250</option><option className="pt-3" value="+262">+262</option><option className="pt-3" value="+590">+590</option><option className="pt-3" value="+290">+290</option><option className="pt-3" value="+1869">+1869</option><option className="pt-3" value="+1758">+1758</option><option className="pt-3" value="+590">+590</option><option className="pt-3" value="+508">+508</option><option className="pt-3" value="+1784">+1784</option><option className="pt-3" value="+685">+685</option><option className="pt-3" value="+378">+378</option><option className="pt-3" value="+239">+239</option><option className="pt-3" value="+966">+966</option><option className="pt-3" value="+221">+221</option><option className="pt-3" value="+381">+381</option><option className="pt-3" value="+248">+248</option><option className="pt-3" value="+232">+232</option><option className="pt-3" value="+65">+65</option><option className="pt-3" value="+421">+421</option><option className="pt-3" value="+386">+386</option><option className="pt-3" value="+677">+677</option><option className="pt-3" value="+252">+252</option><option className="pt-3" value="+27">+27</option><option className="pt-3" value="+211">+211</option><option className="pt-3" value="+500">+500</option><option className="pt-3" value="+34">+34</option><option className="pt-3" value="+94">+94</option><option className="pt-3" value="+249">+249</option><option className="pt-3" value="+597">+597</option><option className="pt-3" value="+47">+47</option><option className="pt-3" value="+268">+268</option><option className="pt-3" value="+46">+46</option><option className="pt-3" value="+41">+41</option><option className="pt-3" value="+963">+963</option><option className="pt-3" value="+886">+886</option><option className="pt-3" value="+992">+992</option><option className="pt-3" value="+255">+255</option><option className="pt-3" value="+66">+66</option><option className="pt-3" value="+670">+670</option><option className="pt-3" value="+228">+228</option><option className="pt-3" value="+690">+690</option><option className="pt-3" value="+676">+676</option><option className="pt-3" value="+1868">+1868</option><option className="pt-3" value="+216">+216</option><option className="pt-3" value="+90">+90</option><option className="pt-3" value="+993">+993</option><option className="pt-3" value="+1649">+1649</option><option className="pt-3" value="+688">+688</option><option className="pt-3" value="+256">+256</option><option className="pt-3" value="+380">+380</option><option className="pt-3" value="+971">+971</option><option className="pt-3" value="+44">+44</option><option className="pt-3" value="+1">+1</option><option className="pt-3" value="+598">+598</option><option className="pt-3" value="+998">+998</option><option className="pt-3" value="+678">+678</option><option className="pt-3" value="+58">+58</option><option className="pt-3" value="+84">+84</option><option className="pt-3" value="+1284">+1284</option><option className="pt-3" value="+1340">+1340</option><option className="pt-3" value="+681">+681</option><option className="pt-3" value="+967">+967</option><option className="pt-3" value="+260">+260</option><option className="pt-3" value="+263">+263</option>
                                                </select>
                                            </div>
                                            <div className="col-9">
                                            <input type="tel" placeholder="Phone..." name="phone" id="phone" className="form-control form_custom_input" pattern="[0-9]{9,12}" maxlength="11" required="" value="" />
                                            </div>
                                           </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Description <span>*</span></label>
                                            <textarea className='form-control' placeholder='Your message' name="" rows={4} id=""></textarea>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="">Attach File</label>
                                            <input type="file" className='form-control' name="" id="" />
                                        </div>
                                        <div className="col-12 mb-3 d-flex">
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Candidate
                                            </label>
                                            </div>
                                            <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Interested Recruiter
                                            </label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-end">
                                        <button type='submit' 
                                        style={{height:"50px"}}
                                        className="btn btn-register rounded-2 fs-6 w-100">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row mt-5 py-4 contact_us_details">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-solid fa-phone"></i>
                              </div>
                                <h5>Phone</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <Link className='text-primary'>+91 534-468-854</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-regular fa-envelope"></i>
                              </div>
                                <h5>Email</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <Link className='text-primary'>info@example.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-body rounded-3 text-center p-lg-5 p-md-4">
                              <div className="contact_icon shadow rounded-2 mb-3">
                              <i className="fa-solid fa-location-dot"></i>
                              </div>
                                <h5>Address</h5>
                                <p className="text-muted">Start working with us that can provide everything</p>
                                <p className='text-primary'>#123 Street Road (121565)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    </>
  )
}

export default Contact