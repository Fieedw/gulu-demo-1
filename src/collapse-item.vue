<template>
    <div class="collapseItem">
        <div @click="open=!open" class="title">{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'GuLuCollapseItem',
    props: {
      title: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        open: false,
      };
    }
  };
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-right: -1px;
            margin-left: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-right-radius: $border-radius;
                border-top-left-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-right-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
        }
        > .content {
            padding: 8px;
        }
    }
</style>