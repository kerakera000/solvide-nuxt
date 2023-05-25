<template>
    <section class="Ccontact">
        <!-- 装飾 -->
        <div class="Cbackground">
            <div class="Cbackground__cnt">
                <div class="Cball1"></div>
                <div class="Cball2"></div>
            </div>
        </div>

        <!-- コンタクト -->
        <div class="Ctitle">
            <h1>CONTACT</h1>
            <p>お問い合わせ</p>
            <span></span>
        </div>
        <div class="form load-in load-in3">
            <form class="form__content" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKgS0Fp1IVKwqTlB5QEMBmyGKsDowH5rPdCkot1HcUbDyqVQ/formResponse">
                <div class="form__content--flex">
                    <p class="form-text">お名前<span>*</span></p>
                    <div :class="['form-box', { 'filled': inputValue1 !== '' || isInputFocused1 }]">
                        <input class="min" type="text" name="entry.118645819" v-model="inputValue1" @focus="isInputFocused1 = true" @blur="isInputFocused2 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">会社名</p>
                    <div :class="['form-box', { 'filled': inputValue2 !== '' || isInputFocused2 }]">
                        <input class="min" type="text" name="entry.118645819" v-model="inputValue2" @focus="isInputFocused2 = true" @blur="isInputFocused2 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">メールアドレス<span>*</span></p>
                    <div :class="['form-box', { 'filled': inputValue3 !== '' || isInputFocused3 }]">
                        <input class="min" type="text" name="entry.118645819" v-model="inputValue3" @focus="isInputFocused3 = true" @blur="isInputFocused2 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">電話番号<span>*</span></p>
                    <div :class="['form-box', { 'filled': inputValue4 !== '' || isInputFocused4 }]">
                        <input class="min" type="text" name="entry.118645819" v-model="inputValue4" @focus="isInputFocused4 = true" @blur="isInputFocused2 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">お問い合わせのサービス<span>*</span></p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue1 !== null }]">
                        <select class="min" name="entry.1827941720" v-model="selectedValue1" required>
                            <option value="">選択してください</option>
                            <option value="選択肢 2">選択肢 2</option>
                            <option value="選択肢 3">選択肢 3</option>
                            <option value="選択肢 4">選択肢 4</option>
                            <option value="選択肢 5">選択肢 5</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">想定総ページ数<span>*</span></p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue2 !== null }]">
                        <select class="min" name="entry.1827941720" v-model="selectedValue2" required>
                            <option value="">選択してください</option>
                            <option value="選択肢 2">選択肢 2</option>
                            <option value="選択肢 3">選択肢 3</option>
                            <option value="選択肢 4">選択肢 4</option>
                            <option value="選択肢 5">選択肢 5</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">ご予算上限<span>*</span></p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue3 !== null }]">
                        <select class="min" name="entry.1827941720" v-model="selectedValue3" required>
                            <option value="">選択してください</option>
                            <option value="選択肢 2">選択肢 2</option>
                            <option value="選択肢 3">選択肢 3</option>
                            <option value="選択肢 4">選択肢 4</option>
                            <option value="選択肢 5">選択肢 5</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">ご希望の納期<span>*</span></p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue4 !== null }]">
                        <select class="min" name="entry.1827941720" v-model="selectedValue4" required>
                            <option value="">選択してください</option>
                            <option value="選択肢 2">選択肢 2</option>
                            <option value="選択肢 3">選択肢 3</option>
                            <option value="選択肢 4">選択肢 4</option>
                            <option value="選択肢 5">選択肢 5</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex-large">
                    <p class="form-text">お問い合わせ内容<span>*</span></p>
                    <div class="form-box-large">
                        <textarea class="large" placeholder="ご依頼内容の詳細についてお伝えください。ご相談したいサイトURLがあればあわせてお知らせいただけますと幸いです。" name="entry.128190185" rows="3" cols="50"></textarea>
                    </div>
                </div>

                <div class="radio">
                    <input  class="radio__button" type="checkbox" name="policy" id="policy"  />
                    <label class="radio__text" for="policy"><a href="">プライバシーポリシー</a>に同意する</label>
                </div>

                <div class="form-submit-box">
                    <div class="NContact__button">
                        <div class="main-contact-btn">
                            <button class="form-submit Mbutton" type="submit">送信</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selectedValue1: null,
                selectedValue2: null,
                selectedValue3: null,
                selectedValue4: null,
                inputValue1: '',
                inputValue2: '',
                inputValue3: '',
                inputValue4: '',
                isInputFocused1: false,
                isInputFocused2: false,
                isInputFocused3: false,
                isInputFocused4: false,
            };
        }
    };
</script>

<style scoped>
.filled {
    height: 8rem !important;
    background-color: rgb(232, 240, 254);
}
</style>