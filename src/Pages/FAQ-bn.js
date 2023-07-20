import React from "react";
import Footer_Bn from "../Components/Footer-bn";
import { Accordion } from 'react-bootstrap';
import NavBarBengali from '../Components/NavBarBengali';

function FAQ(){
    return(
        <div>
            <NavBarBengali></NavBarBengali>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <header>
                <h1 id="faq-header">সচরাচর জিজ্ঞাস্য</h1>
            </header>
            <section id="faq-section">
            <p id="change-language" >ভাষা পরিবর্তন করুন: <a href="/faq/en">English</a></p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="faq-question">আপনি কি রিজার্ভেশন নেন?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        হ্যাঁ! Mickey's Munch সম্ভাব্য পৃষ্ঠপোষকদের রেস্তোরাঁয় একটি নির্দিষ্ট টেবিল বুক করতে বা এমনকি বিশেষ ইভেন্টের জন্য সমগ্র স্থান বুক করার অনুমতি দেয়। আপনি <a href="/reservations">এখানে</a> একটি নির্দিষ্ট টেবিল বুক করতে পারেন অথবা <a href="/hostoccasion">এখানে</a> ভেন্যু বুক করতে পারেন
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header id="faq-question">আপনি কি ছুটির দিনে খোলা?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        হ্যাঁ, আমরা প্রতি একক ছুটির দিনে খোলা থাকি, মিকি'স মাঞ্চে গিয়ে আপনার ছুটি উপভোগ করতে নির্দ্বিধায়!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header id="faq-question">আপনার কি নিরামিষ, নিরামিষ, গ্লুটেন মুক্ত বিকল্প আছে?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        হ্যাঁ, আপনি <a href="/takeout">টেকআউট</a> পৃষ্ঠায় আমাদের মেনু ব্রাউজ করতে পারেন যেখানে আপনি বিভিন্ন খাদ্যতালিকাগত সীমাবদ্ধতার মাধ্যমে ফিল্টার করতে পারেন
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header id="faq-question">আমি আপনার মেনুতে গ্লুটেন মুক্ত বিকল্পগুলি দেখতে পাচ্ছি কিন্তু আপনি কি সেগুলি আলাদা পাত্রে প্রস্তুত করেন? আপনার কি আলাদা গ্লুটেন ফ্রি ফ্রায়ার আছে?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        যে সমস্ত খাবারে কিছু খাদ্যতালিকাগত সীমাবদ্ধতা রয়েছে সেগুলি খাবারের থেকে সম্পূর্ণ আলাদাভাবে প্রস্তুত করা হয় যাতে সমস্ত চাহিদা পূরণ হয় তা নিশ্চিত করার জন্য কোনও খাদ্যতালিকাগত সীমাবদ্ধতা নেই। আমরা আমাদের কোশার খাবারের জন্য কাশরুথ কাউন্সিল অফ কানাডা (COR) দ্বারা প্রত্যয়িত এবং আমাদের হালাল খাবারের জন্য জাবিহা প্রত্যয়িত!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header id="faq-question">আপনার কি বাচ্চাদের মেনু আছে?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        আমাদের দুর্ভাগ্যবশত বাচ্চাদের মেনু নেই কিন্তু দক্ষিণ এশীয় খাবার সহজে সব বয়সের ব্যক্তিরা উপভোগ করতে পারে তাই নির্দ্বিধায় পুরো পরিবারকে নিচে নামিয়ে নিন!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header id="faq-question">আমি এইমাত্র এখান থেকে নিয়ে এসেছি এবং আমার অর্ডারে একটি ভুল আছে। আপনি এটা ঠিক করতে পারবো?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        আপনার অর্ডারে ভুল হয়েছে শুনে আমরা দুঃখিত, আপনার উদ্বেগের সমাধানের জন্য রেস্তোরাঁয় (613) 465-2390 এ কল করুন এবং আমরা আপনাকে বিনামূল্যে একটি প্রতিস্থাপনের অর্ডার পাঠাব!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header id="faq-question">আজ কত দেরি করে খুলছ? আপনি আগামীকাল কত তাড়াতাড়ি খুলবেন?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                            আমরা প্রতিদিন সকাল 8:30 AM ডটে খুলি এবং সপ্তাহের 7 দিন, এমনকি ছুটির দিনেও 10:00 PM পর্যন্ত খোলা থাকি!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header id="faq-question">আপনি কি প্রতিবন্ধী অ্যাক্সেসযোগ্য? হুইলচেয়ারেও?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        আমাদের রেস্তোরাঁর প্রতিটি প্রবেশদ্বারে এবং হুইলচেয়ার অ্যাক্সেসযোগ্য বুথগুলিতে র‌্যাম্প রয়েছে এবং আরও বেশি থাকার ব্যবস্থা করা হলে আপনি আগে থেকে কল করতে পারেন এবং আমরা আপনার সমস্ত চাহিদা পূরণ করা নিশ্চিত করার জন্য যথাসাধ্য চেষ্টা করব
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header id="faq-question">কাছাকাছি পার্কিং আছে?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        আমাদের রেস্তোরাঁর সামনে পার্কিং আছে, কিন্তু সেখানে সীমিত সংখ্যক স্পট আছে তাই আগে আসলে আগে পাবেন। রেস্তোরাঁ থেকে 2 মিনিট হাঁটার দূরে একটি শহরের পার্কিং লট রয়েছে যা পার্কিংয়ের জন্য $2.00/ঘন্টা চার্জ করে৷
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header id="faq-question">আপনি কি ____ (15, 20, 30 জন) গোষ্ঠীকে মিটমাট করতে পারেন? আপনি একটি ব্যক্তিগত রুম আছে? আপনি একটি বড় দলের জন্য একটু পরে খোলা থাকবে?</Accordion.Header>
                        <Accordion.Body id="faq-answer">
                        অবশ্যই আমরা বৃহৎ গোষ্ঠীগুলিকে মিটমাট করতে পারি, আপনি আমাদের <a href="/hostoccasion">একটি অনুষ্ঠান হোস্ট করুন</a> পৃষ্ঠাতে আরও বুকিং তথ্য পেতে পারেন যেখানে আপনি একটি ভেন্যু হিসাবে পুরো রেস্টুরেন্ট বুক করতে পারেন৷ আমরা যদি একটু পরে খোলা রাখতে পারি, তবে এটি কোনও সমস্যা নয় যতক্ষণ না এটি আমাদের সাথে আগে থেকেই যোগাযোগ করা হয়। আশা করি ইভেন্ট বুকিংয়ের ক্ষেত্রে আমরা আপনার প্রথম পছন্দ!
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
            </section>
            <Footer_Bn></Footer_Bn>
        </div>
    )
}

export default FAQ;