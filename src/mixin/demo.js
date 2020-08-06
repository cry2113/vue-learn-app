import logo from '@/assets/logo.png'
export default {
    data() {
        return {
            baseImg: logo,
            $_timer: null
        }
    },
    mounted() {
        // 首屏懒加载一次
        this.$_lazyLoadImage();
        // 监听croll事件
        window.addEventListener('scroll', this.$_handelScroll);
        // 移除croll事件
        this.$on('hook:beforeDestroy', () => {
            window.removeEventListener('scroll', this.$_handelScroll)
        })
    },
    methods: {
        $_handelScroll() {
            clearTimeout(this.$_timer);
            this.$_timer = setTimeout(() => {
                this.$_lazyLoadImage();
            }, 20);
        },
        // 懒加载图片
        $_lazyLoadImage() {
            const imgList = this.$_getNeedLoadingImg();
            if (imgList.length <= 0) return;
            // 判断图片是否展示
            imgList.forEach(img => {
                if (this.$_imgInView(img)) {
                    this.$_showImg(img)
                }
            })
        },
        // 获取需要加载的图片
        $_getNeedLoadingImg() {
            let images = Array.from(document.querySelectorAll('img[data_src]'));
            images = images.filter(ele => {
                return !ele.getAttribute('isloaded')
            })
            return images
        },
        // 计算图片位置，判断图片是否展示
        $_imgInView(img) {
            return window.innerHeight + document.documentElement.scrollTop >= img.offsetTop
        },
        // 展示图片
        $_showImg(img) {
            const image = new Image();
            const src = img.getAttribute('data_src')
            image.src = src;
            image.onload = () => {
                img.src = src;
                // 标记已加载完成
                img.setAttribute('isloaded', true);
            }
        }
    }
}
