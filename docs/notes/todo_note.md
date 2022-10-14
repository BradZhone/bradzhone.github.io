# TODO List

1. **HugeCTR**
   - [ ] 源码
   - [ ] 熟悉各notebook中例程
   - [ ] 熟悉API文档以及相关使用方法流程，完善wiki
   - [ ] 尝试对比SOK与API异同
   - [ ] 尝试结合horovod使用，对比性能
   - [ ] 性能
   - [ ] 数据集
   - [ ] 适配方式（API or SOK）、依赖关系
   - 初步方向
     - 搭建适用于寒武纪自研计算卡的推荐系统分布式训练框架
     - 参考hugectr实现
     - 相关性能优化与数据测试
   - QA
     - hugectr生态中有众多组件，将来是需要用到所有组件吗？（调研组件之间的依赖关系，示例代码中）
     - hugectr拥有Python API和Tensorflow插件SOK，那么以后使用哪一个呢？
     - 数据损坏，无法下载
2. ~~**WarpCore**~~
   - [ ] ~~源码解读~~
   - [ ] ~~API接口~~
   - [x] ~~文档回顾~~
3. **Dynamic Hash**
   - [ ] cuCollection
   - [ ] <font color='red'>cnctr逻辑摘出来在370上跑</font>
4. **Other**
   - [ ] 明确开发目标（先调研各个组件的性能，然后客户需求）
   - [ ] 开发流程、规范、绘图方法（接口）学习
   - [ ] <font color='red'>CUDA</font>
   - [ ] <font color='red'>BangC</font>
5. 