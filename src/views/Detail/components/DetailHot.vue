<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in goodList"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>
<script setup>
import { fetchHotGoodsAPI } from '@/apis/detail'
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'


// 路由
const route = useRoute()
const props = defineProps({
  type: {
    type: Number, // 1代表24小时热销榜 2代表周热销榜 3代表总热销榜 可以使用type去适配title和数据列表
    default: 1
  }
})

// 定义类型枚举
const TYPEEUM = {
  "1": '24小时热榜',
  "2": "一周热榜"
}

const title = computed(() => TYPEEUM[props.type])

const goodList = ref({})

const getGoodList = async (params) => {
  try {
    const res = await fetchHotGoodsAPI(params)
    goodList.value = res.result
  } catch (err) {
    console.log(err, "hot接口报错")
  }
}

onMounted(() => {
  getGoodList({ type: props.type, id: route.params.id })
})

</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>