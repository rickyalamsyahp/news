import beritaImage from '@/assets/images/berita.jpeg';
import Image from 'next/image';

const articleSlug = {
  attributes: {
    title: "Wakil Gubernur Jabar Bantu Korban Banjir Bekasi",
    category: "Politik",
    published_date: "2025-03-10",
    content_md: `<p><strong>Bekasi – Wakil Gubernur Jawa Barat turun langsung ke lokasi banjir di Bekasi</strong> untuk meninjau kondisi warga yang terdampak. Dalam kunjungannya, ia memberikan bantuan berupa sembako, perlengkapan medis, dan kebutuhan darurat lainnya.</p>
    
    <p>Banjir yang terjadi akibat curah hujan tinggi ini telah merendam ratusan rumah di beberapa kecamatan. Pemerintah daerah bersama relawan dan pihak terkait terus berupaya mengevakuasi warga yang masih terjebak serta menyalurkan bantuan dengan cepat.</p>
    
    <blockquote>"Kami berusaha semaksimal mungkin untuk memastikan warga yang terdampak mendapatkan bantuan yang diperlukan. Evakuasi dan distribusi logistik menjadi prioritas utama saat ini," ujar Wakil Gubernur.</blockquote>
    
    <p>Menurut data dari Badan Penanggulangan Bencana Daerah (BPBD), banjir kali ini disebabkan oleh intensitas hujan yang tinggi dalam beberapa hari terakhir serta meluapnya beberapa sungai di wilayah Bekasi. Banyak warga yang harus mengungsi ke tempat penampungan sementara, sementara petugas terus berusaha memperbaiki tanggul yang jebol.</p>
    
    <h3>Kondisi Terkini</h3>
    
    <p>Hingga saat ini, beberapa wilayah masih terendam air dengan ketinggian mencapai satu hingga dua meter. Banyak warga yang terpaksa mengungsi ke gedung-gedung sekolah dan balai desa yang disulap menjadi tempat penampungan sementara.</p>
    
    <p>Pemerintah daerah juga telah mendirikan dapur umum untuk menyediakan makanan bagi korban yang mengungsi. "Kami terus berkoordinasi dengan berbagai pihak untuk memastikan ketersediaan bahan makanan dan air bersih," ujar salah satu petugas BPBD yang bertugas di lokasi.</p>
    
    <h3>Bantuan Terus Berdatangan</h3>
    
    <p>Sejumlah lembaga kemanusiaan dan relawan telah turun ke lokasi untuk membantu evakuasi dan distribusi bantuan. Sejumlah perusahaan swasta dan komunitas masyarakat juga mulai menggalang donasi guna meringankan beban para korban banjir.</p>
    
    <p>Menurut laporan dari BNPB, intensitas hujan masih tinggi dalam beberapa hari ke depan, dan kemungkinan banjir susulan masih bisa terjadi. Oleh karena itu, warga diminta untuk selalu siaga dan segera mencari tempat yang lebih aman jika situasi semakin memburuk.</p>
    
    <p>Pemerintah daerah juga sedang mempertimbangkan untuk membangun tanggul darurat di beberapa titik yang rawan meluapnya air sungai.</p>
    
    <h3>Cara Membantu Korban Banjir</h3>
    
    <ul>
      <li>Donasi uang tunai ke lembaga kemanusiaan resmi yang menangani bencana banjir.</li>
      <li>Mengirimkan bantuan makanan, pakaian layak pakai, dan perlengkapan mandi ke posko pengungsian.</li>
      <li>Bergabung dengan tim relawan untuk membantu evakuasi dan distribusi bantuan.</li>
    </ul>
    
    <p>"Kami sangat mengapresiasi bantuan dari semua pihak. Semoga situasi ini segera membaik dan warga bisa kembali ke rumah mereka dengan aman," tutup Wakil Gubernur.</p>`,
    content_desc: `**Bekasi – Wakil Gubernur Jawa Barat turun langsung ke lokasi banjir di Bekasi** untuk meninjau kondisi warga yang terdampak. Dalam kunjungannya, ia memberikan bantuan berupa sembako, perlengkapan medis, dan kebutuhan darurat lainnya.

Banjir yang terjadi akibat curah hujan tinggi ini telah merendam ratusan rumah di beberapa kecamatan. Pemerintah daerah bersama relawan dan pihak terkait terus berupaya mengevakuasi warga yang masih terjebak serta menyalurkan bantuan dengan cepat.`,
    image: {
      data: {
        attributes: {
          url: beritaImage
        }
      }
    },
    slug: "wakil-gubernur-bantu-korban-banjir",
  }
};


const articlesCat = [
  {
    attributes: {
      title: "Understanding React Server Components",
      category: "Technology",
      published_date: "2025-03-08",
      slug: "react-server-components",
      content_md: `**React Server Components** memungkinkan rendering lebih efisien dengan pemisahan kode di server dan client. Artikel ini menjelaskan konsep dasar, manfaat, dan cara menggunakannya dalam pengembangan aplikasi modern.`,
      image: {
        data: {
          attributes: {
            url: beritaImage
          }
        }
      }
    }
  },
  {
    attributes: {
      title: "How Tailwind CSS Simplifies Styling",
      category: "Design",
      published_date: "2025-03-07",
      slug: "tailwind-css",
      content_md: `**Tailwind CSS** adalah framework utility-first yang memungkinkan pengembangan UI lebih cepat. Artikel ini membahas cara kerja Tailwind, kelebihannya dibanding CSS tradisional, dan tips mengoptimalkan penggunaannya.`,
      image: {
        data: {
          attributes: {
            url: beritaImage
          }
        }
      }
    }
  },
  {
    attributes: {
      title: "The Future of AI in Web Development",
      category: "Technology",
      published_date: "2025-03-06",
      slug: "future-ai-web",
      content_md: `**Artificial Intelligence (AI) semakin berperan dalam pengembangan web.** Artikel ini membahas bagaimana AI digunakan untuk otomatisasi desain, personalisasi pengalaman pengguna, dan optimasi performa situs web di masa depan.`,
      image: {
        data: {
          attributes: {
            url: beritaImage
          }
        }
      }
    }
  },
  {
    attributes: {
      title: "New Trends in UI/UX for 2025",
      category: "Design",
      published_date: "2025-03-05",
      slug: "uiux-trends-2025",
      content_md: `**Desain UI/UX terus berkembang.** Artikel ini menjelaskan tren terbaru UI/UX di tahun 2025, termasuk penggunaan animasi mikro, dark mode yang lebih fleksibel, dan desain berbasis kecerdasan buatan.`,
      image: {
        data: {
          attributes: {
            url: beritaImage
          }
        }
      }
    }
  }
];

export { articleSlug, articlesCat };