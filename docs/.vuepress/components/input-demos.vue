<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input :disable="true" value="张三"></g-input>
        <g-input :read-only="true" value="李四"></g-input>
        <g-input value="王五"></g-input>
        <g-input error="姓名不能少于3个字符" value="王"></g-input>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GInput from '../../../src/input'

    export default {
        components: { 'g-input': GInput},
        data () {
            return {
                selected: '1',
                content: `
         <g-input :disable="true" value="张三"></g-input>
        <g-input :read-only="true" value="李四"></g-input>
        <g-input value="王五"></g-input>
        <g-input error="姓名不能少于3个字符" value="王"></g-input>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>