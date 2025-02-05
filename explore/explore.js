const cities = {
    giza: {
        name: "Giza",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Giza-pyramids.JPG",
        places: {
            great_pyramid: {
                id: 1,
                name: "Great Pyramid of Giza",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
                description: "The largest and oldest of the three pyramids, it is one of the Seven Wonders of the Ancient World.",
                longDescription: "Built over 4,500 years ago, the Great Pyramid is a masterpiece of engineering and remains one of the most visited landmarks in the world. It was constructed as a tomb for the Pharaoh Khufu."
            },
            pyramid_of_khafre: {
                id: 2,
                name: "Pyramid of Khafre",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Pyramid_of_Khafre_and_Sphinx%2C_Giza%2C_Greater_Cairo%2C_Egypt.jpg",
                description: "The second-largest pyramid, known for retaining some of its original limestone casing at the top.",
                longDescription: "The Pyramid of Khafre is part of the Giza Pyramid Complex and is believed to have been built as a tomb for Pharaoh Khafre. It is slightly smaller than the Great Pyramid but appears taller due to its higher elevation."
            },
            pyramid_of_menkaure: {
                id: 3,
                name: "Pyramid of Menkaure",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Cairo%2C_Gizeh%2C_Pyramid_of_Menkaure%2C_Egypt%2C_Oct_2005.jpg",
                description: "The smallest of the three main pyramids in Giza.",
                longDescription: "The Pyramid of Menkaure is the smallest of the three pyramids at Giza and was built as a tomb for Pharaoh Menkaure. Despite its smaller size, it is an impressive example of ancient Egyptian architecture."
            },
            great_sphinx: {
                id: 4,
                name: "The Great Sphinx",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Sphinx_with_the_third_pyramid.jpg",
                description: "A colossal limestone statue with the body of a lion and the head of a pharaoh, believed to represent Khafre.",
                longDescription: "The Great Sphinx is one of the most iconic monuments in Egypt. It is believed to have been built during the reign of Pharaoh Khafre and is thought to represent the pharaoh himself. The statue has fascinated visitors for centuries with its mysterious expression and massive size."
            },
            dream_park: {
                id: 5,
                name: "Dream Park",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/73/cc/20/dream-park.jpg",
                description: "One of the largest theme parks in the Middle East, offering a variety of rides, attractions, and entertainment options.",
                longDescription: "Dream Park is a popular destination for families and thrill-seekers alike. It features a wide range of rides, from roller coasters to water attractions, as well as live shows and dining options."
            }
        }
    },
    cairo: {
        name: "Cairo",
        image: "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        places: {
            khan_el_khalili: {
                id: 1,
                name: "Khan El Khalili Bazaar",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/74/%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg",
                description: "A lively traditional market selling handmade crafts, jewelry, spices, and souvenirs.",
                longDescription: "Khan El Khalili is one of the oldest and most famous bazaars in the Middle East. It offers a vibrant atmosphere where visitors can shop for traditional Egyptian goods, enjoy local cuisine, and experience the rich culture of Cairo."
            },
            al_muizz_street: {
                id: 2,
                name: "Al-Muizz Street",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Mosque%2C_Khanqah_and_Mausoleum_of_Al_Sultan_Al_Zahir_Barquq_011.jpg",
                description: "A historical street filled with Islamic architecture, old mosques, and medieval houses.",
                longDescription: "Al-Muizz Street is one of the oldest streets in Cairo, dating back to the 10th century. It is home to some of the most beautiful examples of Islamic architecture, including mosques, madrasas, and historic houses."
            },
            pharaonic_village: {
                id: 3,
                name: "Pharaonic Village",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Pharaonic_Village.jpg",
                description: "A unique living museum where visitors can experience life in Ancient Egypt.",
                longDescription: "The Pharaonic Village is an interactive museum that recreates life in Ancient Egypt. Visitors can explore replicas of ancient homes, temples, and workshops, and learn about the daily lives of the pharaohs and their subjects."
            }
        }
    },
    aswan: {
        name: "Aswan",
        image: "https://static.wixstatic.com/media/5eff48_dea8be1eae8c49ea95e8a08ea3197d1f~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5eff48_dea8be1eae8c49ea95e8a08ea3197d1f~mv2_d_3264_2448_s_4_2.jpg",
        places: {
            abu_simbel: {
                id: 1,
                name: "Abu Simbel Temples",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg",
                description: "Built by Pharaoh Ramses II in the 13th century BC, featuring two massive rock temples.",
                longDescription: "The Abu Simbel Temples are among the most impressive monuments in Egypt. Carved into a mountainside, the temples were relocated in the 1960s to save them from flooding caused by the construction of the Aswan High Dam."
            },
            philae_temple: {
                id: 2,
                name: "Philae Temple",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/File%2C_Asu%C3%A1n%2C_Egipto%2C_2022-04-01%2C_DD_93.jpg",
                description: "Dedicated to Goddess Isis, located on Agilkia Island, accessible by boat.",
                longDescription: "The Philae Temple is a beautiful island temple dedicated to the goddess Isis. It was saved from flooding by UNESCO's Nubian Rescue Project and relocated to Agilkia Island, where it continues to attract visitors with its stunning architecture and serene setting."
            },
            aswan_high_dam: {
                id: 3,
                name: "Aswan High Dam & Lake Nasser",
                image: "https://cdn.britannica.com/34/76234-050-6176AC39/Aswan-High-Dam-Egypt.jpg",
                description: "One of the largest dams in the world, built in 1960-1970, controlling the Nile's flow and generating electricity.",
                longDescription: "The Aswan High Dam is a monumental engineering feat that has had a significant impact on Egypt's agriculture and economy. Lake Nasser, created by the dam, is one of the largest man-made lakes in the world and offers stunning scenery and wildlife."
            }
        }
    },
    luxor: {
        name: "Luxor",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Templo_funerario_de_Hatshepsut%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_13.jpg",
        places: {
            karnak_temple: {
                id: 1,
                name: "Karnak Temple Complex",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Temple_de_Louxor_68.jpg",
                description: "One of the largest temple complexes in the world, built over 2,000 years.",
                longDescription: "The Karnak Temple Complex is a vast open-air museum and one of the largest religious sites in the world. It features the Great Hypostyle Hall, with 134 massive columns covered in hieroglyphs, and is a testament to the architectural and artistic achievements of ancient Egypt."
            },
            valley_of_the_kings: {
                id: 2,
                name: "Valley of the Kings",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Templo_funerario_de_Hatshepsut%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_13.jpg",
                description: "The burial site of New Kingdom pharaohs, including Tutankhamun, Ramses II, and Seti I.",
                longDescription: "The Valley of the Kings is one of the most famous archaeological sites in the world. It contains over 60 tombs, some with colorful and well-preserved hieroglyphs, and offers a glimpse into the burial practices and beliefs of ancient Egypt."
            },
            luxor_temple: {
                id: 3,
                name: "Luxor Temple",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg",
                description: "A stunning temple complex dedicated to Amun-Ra, built by Amenhotep III and Ramses II.",
                longDescription: "Luxor Temple is a beautifully preserved temple complex that was dedicated to the god Amun-Ra. It features colossal statues, obelisks, and well-preserved carvings, and is connected to the Karnak Temple by the Avenue of Sphinxes."
            }
        }
    },
    alexandria: {
        name: "Alexandria",
        image: "https://i0.wp.com/mytravelation.com/wp-content/uploads/2023/09/alexandria.jpeg",
        places: {
            qaitbay_citadel: {
                id: 1,
                name: "Qaitbay Citadel",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/QaitbeyCitadel.jpg",
                description: "A 15th-century fortress built on the ruins of the Lighthouse of Alexandria.",
                longDescription: "The Qaitbay Citadel is a historic fortress located on the Mediterranean coast. It was built to protect Egypt from Ottoman invasions and now serves as a popular tourist attraction with stunning sea views and a naval museum."
            },
            bibliotheca_alexandrina: {
                id: 2,
                name: "Bibliotheca Alexandrina",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Alexandria%27s_Bibliotheca.jpg",
                description: "A modern revival of the ancient Library of Alexandria, one of the greatest libraries in history.",
                longDescription: "The Bibliotheca Alexandrina is a major cultural center and library that commemorates the ancient Library of Alexandria. It features a massive reading hall, multiple museums, and hosts cultural events and exhibitions."
            },
            montaza_palace: {
                id: 3,
                name: "Montaza Palace & Gardens",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Egypt-14A-148_-_Al-Montazah_Palace_%282216757121%29.jpg",
                description: "A royal palace built in the 19th century, surrounded by beautiful gardens and Mediterranean views.",
                longDescription: "Montaza Palace is a historic royal palace that offers visitors a chance to explore its beautiful gardens and enjoy stunning views of the Mediterranean Sea. It is a perfect spot for relaxation and photography."
            }
        }
    },
    red_sea: {
        name: "Red Sea",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hurghada_Hotels_R03.jpg",
        places: {
            sharm_el_sheikh: {
                id: 1,
                name: "Sharm El-Sheikh",
                image: "https://images.trvl-media.com/lodging/19000000/18590000/18589000/18588956/355865cc.jpg",
                description: "Known as the 'Jewel of the Red Sea,' famous for beautiful beaches and coral reefs.",
                longDescription: "Sharm El-Sheikh is a world-renowned beach destination known for its luxury resorts, vibrant nightlife, and stunning coral reefs. Popular activities include diving, snorkeling, and desert safaris."
            },
            hurghada: {
                id: 2,
                name: "Hurghada",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/eb/hurghada.jpg?w=900&h=600&s=1",
                description: "One of Egypt's most popular beach resort cities, famous for diving and snorkeling.",
                longDescription: "Hurghada is a bustling resort city on the Red Sea coast, known for its beautiful beaches, luxury resorts, and excellent diving and snorkeling opportunities. It is also a gateway to the Giftun Islands and Mahmya Beach."
            },
            marsa_alam: {
                id: 3,
                name: "Marsa Alam",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Marsa_Alam_Beach.jpg",
                description: "A quiet and untouched paradise, perfect for diving and nature enthusiasts.",
                longDescription: "Marsa Alam is a tranquil destination known for its pristine beaches, crystal-clear waters, and abundant marine life. It is a popular spot for diving, snorkeling, and exploring the nearby Wadi El Gemal National Park."
            }
        }
    },
    south_sinai: {
        name: "South Sinai",
        image: "https://lh5.googleusercontent.com/p/AF1QipN9ysGtq8PxshcL6H52JGDhnEgNauLcMQLwh445=w675-h390-n-k-no",
        places: {
            saint_catherines_monastery: {
                id: 1,
                name: "Saint Catherine's Monastery",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Katharinenkloster_Sinai_BW_2.jpg",
                description: "One of the oldest Christian monasteries in the world, built in the 6th century.",
                longDescription: "Saint Catherine's Monastery is a historic religious site located at the foot of Mount Sinai. It is home to the Burning Bush, ancient manuscripts, and priceless religious artifacts, making it a significant destination for pilgrims and history enthusiasts."
            },
            dahab: {
                id: 2,
                name: "Dahab",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blue_Hole_2005.JPG",
                description: "A laid-back beach town known for its golden beaches and clear waters.",
                longDescription: "Dahab is a relaxed beach town on the Red Sea coast, famous for its stunning beaches, clear waters, and vibrant diving scene. It is a popular destination for snorkeling, kitesurfing, and experiencing Bedouin culture."
            }
        }
    },
    matrouh: {
        name: "Matrouh",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Cleopatra_Bath%2C_Marsa_Matrouh_%2822%29.jpg",
        places: {
            siwa_oasis: {
                id: 1,
                name: "Siwa Oasis",
                image: "https://upload.wikimedia.org/wikipedia/commons/a/af/%D9%8A%D9%88%D9%85_%D8%AC%D8%AF%D9%8A%D8%AF.jpg",
                description: "A unique desert oasis famous for its natural springs, salt lakes, and ancient ruins.",
                longDescription: "Siwa Oasis is a remote desert oasis known for its natural beauty, including natural springs, salt lakes, and ancient ruins. It is home to the Temple of Amun, where Alexander the Great sought guidance from the Oracle of Amun."
            },
        }
    },
    qena: {
        name: "Qena",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Qena_mosque.jpg",
        places: {
            dendera_temple: {
                id: 1,
                name: "Dendera Temple Complex",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Dendera_7_977.PNG",
                description: "One of Egypt's best-preserved temple complexes, dedicated to the goddess Hathor.",
                longDescription: "The Dendera Temple Complex is a well-preserved ancient site dedicated to the goddess Hathor. It features intricate reliefs, the famous Zodiac of Dendera, and the Sacred Lake, making it a must-visit for history enthusiasts."
            },
            tombs_of_the_nobles: {
                id: 2,
                name: "Tombs of the Nobles",
                image: "https://egymonuments.com/Portals/2/assets/img/Tombs-of-the-nobles/side-image.jpg",
                description: "The tombs belong to ancient Egyptian nobles from the New Kingdom period.",
                longDescription: "The Tombs of the Nobles in Qena are a collection of beautifully painted tombs that offer a glimpse into the lives of ancient Egyptian nobles. The Tomb of Paheri is one of the most famous tombs in the area."
            },
            qena_market: {
                id: 3,
                name: "Qena's Old Town and Markets",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Qena_Market.jpg",
                description: "A traditional market offering visitors a chance to experience the local lifestyle of Upper Egypt.",
                longDescription: "Qena's Old Town and Markets are a vibrant hub of activity, where visitors can shop for traditional crafts, spices, and textiles. The market offers a lively atmosphere and a chance to experience the local culture of Upper Egypt."
            }
        }
    },
    minya: {
        name: "Minya",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Akhenaten_museum_in_Minya_-_Egypt.jpg",
        places: {
            beni_hasan_tombs: {
                id: 1,
                name: "Beni Hasan Tombs",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Beni_Hasan_Tombs.jpg",
                description: "Ancient tombs dating back to the Middle Kingdom, featuring intricate paintings and reliefs.",
                longDescription: "The Beni Hasan Tombs are a collection of ancient tombs that date back to the Middle Kingdom. They are known for their well-preserved wall paintings and reliefs, which depict daily life, religious rituals, and important events."
            },
            tell_el_amarna: {
                id: 2,
                name: "Tell el-Amarna",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Tell_el-Amarna.jpg",
                description: "The ruins of Akhenaten's capital city, built during the 14th century BCE.",
                longDescription: "Tell el-Amarna is the site of the ancient city of Akhetaten, built by Pharaoh Akhenaten. The city was the center of a monotheistic religion centered around the sun god Aton, and the ruins include palaces, temples, and royal tombs."
            },
            tuna_el_gebel: {
                id: 3,
                name: "Tuna el-Gebel",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Tuna_el-Gebel.jpg",
                description: "An important archaeological site near Minya, known for its catacombs and tombs.",
                longDescription: "Tuna el-Gebel is an archaeological site that was used as a burial ground during the Ptolemaic and Roman periods. It is famous for its catacombs, tombs, and the mummification center dedicated to the god Thoth."
            }
        }
    },
    faiyum: {
        name: "Faiyum",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Valley_whales_in_Fayoum.jpg",
        places: {
            lake_qarun: {
                id: 1,
                name: "Lake Qarun",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lake_Qarun.jpg",
                description: "One of the oldest natural lakes in the world, popular for fishing, birdwatching, and boat rides.",
                longDescription: "Lake Qarun is a natural lake located in the Faiyum Oasis. It is a popular destination for fishing, birdwatching, and boat rides, and is surrounded by beautiful landscapes that make it a perfect spot for nature lovers."
            },
            wadi_el_hitan: {
                id: 2,
                name: "Wadi El-Hitan (Valley of the Whales)",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Wadi_El-Hitan.jpg",
                description: "A UNESCO World Heritage Site containing fossils of ancient whales.",
                longDescription: "Wadi El-Hitan, also known as the Valley of the Whales, is a UNESCO World Heritage Site that contains fossils of ancient whales dating back over 40 million years. It is a fascinating destination for history and nature enthusiasts."
            },
            el_lahun_pyramid: {
                id: 3,
                name: "Pyramid of Amenemhat II (El-Lahun Pyramid)",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/El-Lahun_Pyramid.jpg",
                description: "An ancient pyramid built during the reign of Amenemhat II, part of the Middle Kingdom of Egypt.",
                longDescription: "The Pyramid of Amenemhat II, also known as the El-Lahun Pyramid, is an important archaeological site from the Middle Kingdom. It is smaller than the Great Pyramids of Giza but offers a fascinating glimpse into ancient Egyptian history."
            }
        }
    }
};

const cairo = document.getElementById("cairo");
const cairo_title = document.getElementById("cairo_title");
cairo.src = Object.values(cities)[0].image;
cairo_title.innerText = Object.values(cities)[0].name;
gsap.from("#cairo_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
cairo.onclick = function () {
    setSliderPlaces(0);
};

// Add hover effect for Cairo
gsap.to("#cairo", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
cairo.addEventListener("mouseenter", () => gsap.to("#cairo", { scale: 1.1, duration: 0.3 }));
cairo.addEventListener("mouseleave", () => gsap.to("#cairo", { scale: 1, duration: 0.3 }));

const alex = document.getElementById("alex");
alex.src = Object.values(cities)[1].image;
const alex_title = document.getElementById("alex_title");
alex_title.innerText = Object.values(cities)[1].name;
gsap.from("#alex_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
alex.onclick = function () {
    setSliderPlaces(1);
};

// Add hover effect for Alexandria
gsap.to("#alex", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
alex.addEventListener("mouseenter", () => gsap.to("#alex", { scale: 1.1, duration: 0.3 }));
alex.addEventListener("mouseleave", () => gsap.to("#alex", { scale: 1, duration: 0.3 }));

const aswan = document.getElementById("aswan");
aswan.src = Object.values(cities)[2].image;
const aswan_title = document.getElementById("aswan_title");
aswan_title.innerText = Object.values(cities)[2].name;
gsap.from("#aswan_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
aswan.onclick = function () {
    setSliderPlaces(2);
};

// Add hover effect for Aswan
gsap.to("#aswan", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
aswan.addEventListener("mouseenter", () => gsap.to("#aswan", { scale: 1.1, duration: 0.3 }));
aswan.addEventListener("mouseleave", () => gsap.to("#aswan", { scale: 1, duration: 0.3 }));

const hurghada = document.getElementById("hurghada");
hurghada.src = Object.values(cities)[3].image;
const hurghada_title = document.getElementById("hurghada_title");
hurghada_title.innerText = Object.values(cities)[3].name;
gsap.from("#hurghada_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
hurghada.onclick = function () {
    setSliderPlaces(3);
};

// Add hover effect for Hurghada
gsap.to("#hurghada", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
hurghada.addEventListener("mouseenter", () => gsap.to("#hurghada", { scale: 1.1, duration: 0.3 }));
hurghada.addEventListener("mouseleave", () => gsap.to("#hurghada", { scale: 1, duration: 0.3 }));

const luxor = document.getElementById("luxor");
luxor.src = Object.values(cities)[4].image;
const luxor_title = document.getElementById("luxor_title");
luxor_title.innerText = Object.values(cities)[4].name;
gsap.from("#luxor_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });

// Add hover effect for Luxor
gsap.to("#luxor", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
luxor.addEventListener("mouseenter", () => gsap.to("#luxor", { scale: 1.1, duration: 0.3 }));
luxor.addEventListener("mouseleave", () => gsap.to("#luxor", { scale: 1, duration: 0.3 }));

const sharmalsheikh = document.getElementById("sharmalsheikh");
sharmalsheikh.src = Object.values(cities)[5].image;
const sharmalsheikh_title = document.getElementById("sharmalsheikh_title");
sharmalsheikh_title.innerText = Object.values(cities)[5].name;
gsap.from("#sharmalsheikh_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });

// Add hover effect for Sharm El-Sheikh
gsap.to("#sharmalsheikh", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
sharmalsheikh.addEventListener("mouseenter", () => gsap.to("#sharmalsheikh", { scale: 1.1, duration: 0.3 }));
sharmalsheikh.addEventListener("mouseleave", () => gsap.to("#sharmalsheikh", { scale: 1, duration: 0.3 }));

const south_sinai = document.getElementById("south_sinai");
south_sinai.src = Object.values(cities)[6].image;
const south_sinai_title = document.getElementById("south_sinai_title");
south_sinai_title.innerText = Object.values(cities)[6].name;
gsap.from("#south_sinai_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
south_sinai.onclick = function () {
    setSliderPlaces(6);
};

// Add hover effect for South Sinai
gsap.to("#south_sinai", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
south_sinai.addEventListener("mouseenter", () => gsap.to("#south_sinai", { scale: 1.1, duration: 0.3 }));
south_sinai.addEventListener("mouseleave", () => gsap.to("#south_sinai", { scale: 1, duration: 0.3 }));

const matrouh = document.getElementById("matrouh");
matrouh.src = Object.values(cities)[7].image;
const matrouh_title = document.getElementById("matrouh_title");
matrouh_title.innerText = Object.values(cities)[7].name;
gsap.from("#matrouh_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
matrouh.onclick = function () {
    setSliderPlaces(7);
};

// Add hover effect for Matrouh
gsap.to("#matrouh", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
matrouh.addEventListener("mouseenter", () => gsap.to("#matrouh", { scale: 1.1, duration: 0.3 }));
matrouh.addEventListener("mouseleave", () => gsap.to("#matrouh", { scale: 1, duration: 0.3 }));

const qena = document.getElementById("qena");
qena.src = Object.values(cities)[8].image;
const qena_title = document.getElementById("qena_title");
qena_title.innerText = Object.values(cities)[8].name;
gsap.from("#qena_title", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
qena.onclick = function () {
    setSliderPlaces(8);
};

// Add hover effect for Qena
gsap.to("#qena", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power2.out"
});
qena.addEventListener("mouseenter", () => gsap.to("#qena", { scale: 1.1, duration: 0.3 }));
qena.addEventListener("mouseleave", () => gsap.to("#qena", { scale: 1, duration: 0.3 }));

function setSliderPlaces(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    Object.values(Object.values(cities)[index].places).forEach((place, i) => {
        const itemClass = i === 0 ? 'carousel-item active' : 'carousel-item';
        const carouselItem = `
            <div class="${itemClass}">
                <img class="d-block w-100" height="380px" src="${place.image}" alt="Slide ${i + 1}" onclick="location.href='info.html?index=${index}&place=${Object.keys(Object.values(cities)[index].places)[i]}'">
                <div class="carousel-caption d-none d-md-block">
                    <h5 id="text_item">${place.name}</h5>
                    <p id="subtext_item">${place.description}</p>
                </div>
            </div>
        `;
        const indicator = `
            <li data-target="#carouselExampleControls" data-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></li>
        `;
        carouselIndicators.innerHTML += indicator;
        carouselInner.innerHTML += carouselItem;
    });
}

setSliderPlaces(0);