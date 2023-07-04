import Mock from 'mockjs'

// mock方法,详细的可以看官方文档
const Random = Mock.Random

export default [
  // token
  {
    url: '/login',
    type: 'post',
    response: config => {

      return {
        code: 200,
       message:'请求成功',
       token:'authorization-xxxxxx'
      }
    }
  },
  {
    url: '/upload/file',
    type: 'post',
    response: config => {

      return {
        code: 200,
        data: {
          name: 'file',
          url: Random.image('100x100', 'red', '#FFF', 'Mfile')
        }
      }
    }
  },
  {
    url: '/getList/file',
    type: 'get',
    response: () => {

      let fileList = []
      for (let i = 0; i < 6; i++) {
        let file = {}
        file.uid = Random.id()
        file.name = Random.title(3, 5)
        file.url = Random.image('100x100', 'yellow', '#FFF', Random.title(1))
        fileList.push(file)
      }
      return {
        code: 200,
        data: {
          fileList
        }
      }
    }
  },
  {
    url: '/counter/getCounter',
    type: 'post',
    response: config => {

      return {
        code: 200,
       message:'请求成功',
       data: 99,
      }
    }
  },
]