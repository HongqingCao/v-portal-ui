<template>
	<a href="javascript:void(0)"
	   @click="handleHeart()" 
	   :class="{ 
	    'like' : heart.level === 1, 
	    'love' : heart.level === 2, 
	    'stalker' : heart.level === 3 
	   }" 
	   class="heart">
	    <i>♥</i>
  </a>
</template>

<script>
export default {
  props: {
    user_id: Number,
    owner_id: String,
    existing: Number
  },
  data() {
        return {
            heart: {
                level: 0
            }
        }
   },
   methods: {
        handleHeart: function() {
            var heart = this.heart;
            var level = heart.level;
            switch (level) {
                case 0:
                    heart.level = 1;
                    break;
                case 1:
                    heart.level = 2;
                    break;
                case 2:
                    heart.level = 3;
                    break;
                case 3:
                    heart.level = 0;
                    break;
            }

           // this.updateDB();   //写入数据库操作
        },
        updateDB() {
            let level = this.heart.level;
            let user = this.user_id;
            let owner = this.owner_id;
            let message = `User ${user} has been updated to heart level ${level} by ${owner}`;
            console.log(message);
        }
    },
    created() {
        if (!this.existing) {
            this.heart.level = 0;
        } else {
            this.heart.level = this.existing;
        }

    }
}
</script>

<style>
</style>