import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt',
    short_name:
      'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi',
    description:
      'Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/images/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
