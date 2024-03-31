import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as r,a as e,b as n,d as s,w as d,e as l}from"./app-Coh1oo3x.js";const p="/assets/image2022-10-10_16-54-32-DFFXh_Ql.png",m="/assets/SM-BoNjVG5U.png",u="/assets/Insertion-uKYsfe5v.png",v="/assets/BucketListHashTable-BzF_bi4t.png",b="/assets/ParallelRetrieve-VU5WKG_Y.png",h="/assets/SingleValuePerformance-B5WdECht.png",k="/assets/MultiValuePerformance-DTg1AJAx.png",_={},g=e("h1",{id:"warpcore-学习笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warpcore-学习笔记"},[e("span",null,"WARPCORE 学习笔记")])],-1),f={href:"https://github.com/sleeepyjack/warpcore",target:"_blank",rel:"noopener noreferrer"},y={href:"https://sleeepyjack.github.io/warpcore/index.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://arxiv.org/abs/2009.07914",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"_1-背景",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-背景"},[e("span",null,"1 背景")])],-1),w=e("h3",{id:"_1-1-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-简介"},[e("span",null,"1.1 简介")])],-1),G=l("<li><p>warpcore 是用于快速在 CUDA GPU上专门构建高吞吐量的散列数据结构的框架</p></li><li><p>常见的基于 CPU 的哈希表实现在发生冲突后的探测期间由于高度不规则的内存访问模式而导致吞吐量低下。而使用GPU可以凭借其快速的高带宽内存 (HBM2) 和大规模并行性来克服这一限制</p></li><li><p>可完全在device端构建高性能数据处理Pipelines</p></li><li><p>可实现单个V100 GPU上 每秒1.6 billion次 插入，4.3 billion次检索（官方数据，未实测）</p></li><li><p>在高load factor和存储密度下也可得到稳定出色的运行时性能</p></li><li><p>实现32 位和 64 位大规模并行单值和多值哈希表</p></li><li><p>支持动态增长方案</p></li><li><p>支持多GPU并发执行哈希表操作</p></li>",8),C=e("li",null,[e("p",null,"相关介绍："),e("ul",null,[e("li",null,[e("strong",null,"Load Factor"),n("： 负载因子，哈希表中存入的键值对与容量大小的比值")]),e("li",null,[e("strong",null,"IPS"),n(": 每秒插入操作执行次数")]),e("li",null,[e("strong",null,"QPS"),n(": 每秒查询操作执行次数")])])],-1),B=e("h3",{id:"_1-2-数据结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-数据结构"},[e("span",null,"1.2 数据结构")])],-1),R={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/hash_set.cuh",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"HashSet",-1),H={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/single_value_hash_table.cuh",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"SingleValueHashTable",-1),O={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/multi_value_hash_table.cuh",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"MultiValueHashTable",-1),A={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/bucket_list_hash_table.cuh",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"BucketListHashTable",-1),E={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/multi_bucket_hash_table.cuh",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"MultiBucketHashTable",-1),N={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/counting_hash_table.cuh",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"CountingHashTable",-1),L={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/bloom_filter.cuh",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"BloomFilter",-1),z=e("li",null,[e("p",null,[n("支持键类型 "),e("code",null,"std::uint32_t"),n(" 和 "),e("code",null,"std::uint64_t"),n(" 以及任何可简单复制的值类型")])],-1),W={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/hashers.cuh",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/probing_schemes.cuh",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/sleeepyjack/warpcore/blob/master/include/warpcore/storage.cuh",target:"_blank",rel:"noopener noreferrer"},X=e("figure",null,[e("img",{src:p,alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),K=e("h3",{id:"_1-3-依赖环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-依赖环境"},[e("span",null,"1.3 依赖环境")])],-1),Z=e("li",null,[e("p",null,"具有6.0及以上结构支持CUDA的设备")],-1),F={href:"https://developer.nvidia.com/cuda-toolkit",target:"_blank",rel:"noopener noreferrer"},$=e("li",null,[e("p",null,"C++14及以上")],-1),Y={href:"https://gitlab.rlp.net/pararch/hpc_helpers",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/sleeepyjack/kiss_rng",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://nvlabs.github.io/cub/",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/TheLartians/CPM.cmake",target:"_blank",rel:"noopener noreferrer"},se=l('<h3 id="_1-4-原理" tabindex="-1"><a class="header-anchor" href="#_1-4-原理"><span>1.4 原理</span></a></h3><h4 id="_1-4-1-hash-map" tabindex="-1"><a class="header-anchor" href="#_1-4-1-hash-map"><span>1.4.1 Hash Map</span></a></h4><ul><li>给定键 <em><strong>k∈K</strong></em>，对应值 <em><strong>v∈V</strong></em>，寻找映射关系 <em><strong>f: K→ V, k→ f(k):=v</strong></em></li><li>定义hash函数 <em><strong>h: K→ I</strong></em> , <em><strong>k→ h(k):=i</strong></em> , <em><strong>i∈I</strong></em>,为将key映射到不同内存的index</li><li>当出现 <em><strong>h(k) =h(k′)</strong></em>， 且 <em><strong>k != k</strong></em>时，则发生了hash冲突</li></ul><h4 id="_1-4-2-冲突解决方案" tabindex="-1"><a class="header-anchor" href="#_1-4-2-冲突解决方案"><span>1.4.2 冲突解决方案</span></a></h4><ul><li><strong>Separate Chaining (SC)</strong><ul><li>SC 将映射到相同 hash <em><strong>h(k) =i</strong></em> 的键存储在与 index <em><strong>i</strong></em> 相关的数据结构中</li><li>可以是固定数组、动态数组、连续块的链表或单个元素的链表</li><li>缓存效率低下的随机访问</li><li>链表需要额外的内存用于指针，固定大小的数组可能带来内存浪费</li><li>链表中节点的无锁插入和删除可能容易出错</li><li>不利于在并行化环境下使用</li></ul></li><li><strong>Open Addressing (OA)</strong><ul><li>对于 OA，冲突键存储在从候选位置序列中选取的选定位置，这些候选位置由确定性探测方案计算。这种方法通常更适合实现高效、无锁的更新，也更适合推理它们的正确性</li><li><strong>Linear Probing (LP)</strong><ul><li><em><strong>s(k,l) =(h(k) +l) mod c</strong></em></li><li>虽然 LP 能实现高效存储，但它往往会产生密集占用的区域，从而导致每个键所需的探测次数存在很大差异</li></ul></li><li><strong>Quadratic Probing (QP)</strong><ul><li><em><strong>s(k,l) =(h(k) +l^2) mod c</strong></em></li></ul></li><li><strong>Double Hashing (DH)</strong><ul><li><em><strong>s(k,l) =(h(k)+l·g(k)) mod c</strong></em></li><li>QP 和 DH 使用更大的步长来避免这种问题，但代价是中间存在更多的缓存未命中</li></ul></li><li><strong>Cooperative Probing Schem (COPS)</strong><ul><li>为了实现并发探测，使用整个warp（32个线程）来探测一个key的合适索引，每个线程（lane ID 为t）探测一个位置是否合适： <em><strong>h(k,t) mod c</strong></em></li><li>若某一线程找到了空出来的slot，则可使用内部函数的快速投票机制通知同一warp中的其他线程停止探测，最终得到符合条件的最小的索引值，但这一方式需要哈希表 <em><strong>{h(k,0) modc,...,h(k,31) mod c}</strong></em> 在同一个内存空间中以便warp中所有线程共享同一cache行，而只有LP方案符合这一要求</li><li><img src="'+m+'" alt="SM.png" tabindex="0" loading="lazy"><figcaption>SM.png</figcaption></li><li>内部基于LP进行 warp内的探测保证warp内的所有线程探测位置在同一cache行，外部则基于DH探测确定内部方案的起始索引偏移量</li><li>最终的探测范围则是 <em><strong>{(h(k, i/32 ) + 0) mod c, ... , (h(k, i/32 ) + 31) mod c }，c=p·32</strong></em> ，p为素数，保证DH 的无循环属性</li><li><img src="'+u+'" alt="Insertion.png" tabindex="0" loading="lazy"><figcaption>Insertion.png</figcaption></li><li>插入：对于 n 个键值对的批量插入，我们启动一个由 n·g 个线程组成的内核，其中 g 表示每个查询在其中执行的 Cooperative Group (CG) （sub-warp）大小。网格中的每个 CG 被分配给一个键值对并调用相应的device侧插入函数，在输入批次上实现数据并行方案</li><li>查询：使用相同的并行探测方案，但是是寻找冒充查询key的slot，当在找到查询键之前遇到空槽时，搜索终止</li><li>删除：使用相同的并行探测方案，相当于查找对应key，然后插入一个标记覆盖原值，代表此处为空</li></ul></li></ul></li></ul><h4 id="_1-4-3-bucket-list-hash-table" tabindex="-1"><a class="header-anchor" href="#_1-4-3-bucket-list-hash-table"><span>1.4.3 Bucket List Hash Table</span></a></h4><ul><li><p>如果是single-value hash，存储密度等于load factor，可若同一key对应多个value出现多次（multi-value），则同一key需要存储多次value，存储密度将会降低</p></li><li><p>为了提高存储密度，可以使用multi-value hash表将相同key的values使用链表存在一起</p></li><li><p>bucket list hash table使用以主列表句柄作为值的单值哈希表。实际value存储在bucket连续内存块的链表中</p></li><li><p>列表句柄（list handle）是长度为64-bits的数据结构，可原子更新，包含指向最后一个列表的指针、value总数、2-bits状态位（未初始化、阻塞、就绪、已满）</p></li><li><p>除了第一个bucket之外，每个bucket的第一个slot指向列表中前一个bucket</p></li><li><p>bucket长度的动态增长策略：</p><ul><li>定义bucket增长因子，若当前bucket已满，则在当前bucket链表表位添加一个长度为最后一个bucket长度乘以增长因子大小的bucket，e.g. 下图中增长因子为2。我的理解：使用此策略相对于定长增长bucket策略，一是可以节省频繁申请内存的开销（相对于小步长），二是可以避免浪费内存资源（相对于大步长）</li></ul></li><li><figure><img src="'+v+'" alt="BucketListHashTable.png" tabindex="0" loading="lazy"><figcaption>BucketListHashTable.png</figcaption></figure></li><li><p>E.g. 并行检索一批key</p></li><li><figure><img src="'+b+'" alt="ParallelRetrieve.png" tabindex="0" loading="lazy"><figcaption>ParallelRetrieve.png</figcaption></figure></li></ul><h4 id="_1-4-4-对多gpu的支持" tabindex="-1"><a class="header-anchor" href="#_1-4-4-对多gpu的支持"><span>1.4.4 对多GPU的支持</span></a></h4><ul><li>数据密集型应用可通过将hash table构建于多个GPU上，分为分布模式与独立模式两种模式</li><li><strong>分布模式</strong>：每个GPU上都有所有key，只是value将按照GPU ID进行切分后分布到对应GPU上，返回查询结果时将使用all-to-all</li><li><strong>独立模式</strong>：单个key所对应的value全部存储在某一个GPU上，插入数据需要scatter数据，查询时需要broadcast查询命令，查询时返回查询结果需要合并不同GPU上的结果</li></ul><h3 id="_1-5-性能" tabindex="-1"><a class="header-anchor" href="#_1-5-性能"><span>1.5 性能</span></a></h3><ul><li>不同single-value 哈希实现方式在不同存储密度下的表现</li><li><img src="'+h+'" alt="SingleValuePerformance.png" tabindex="0" loading="lazy"><figcaption>SingleValuePerformance.png</figcaption></li><li>不同multi-value 哈希方式在不同value规模下的表现，其中WC OA代表使用MultiValueHashTable， WC BL代表使用 BucketListHashTable</li><li><img src="'+k+'" alt="MultiValuePerformance.png" tabindex="0" loading="lazy"><figcaption>MultiValuePerformance.png</figcaption></li></ul><h2 id="_2-安装与示例" tabindex="-1"><a class="header-anchor" href="#_2-安装与示例"><span>2 安装与示例</span></a></h2><h3 id="_2-1-将warpcore添加到cmake项目" tabindex="-1"><a class="header-anchor" href="#_2-1-将warpcore添加到cmake项目"><span>2.1 将warpcore添加到CMake项目</span></a></h3>',13),ae={href:"https://github.com/TheLartians/CPM.cmake",target:"_blank",rel:"noopener noreferrer"},le=l(`<div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.18</span> FATAL_ERROR<span class="token punctuation">)</span>

<span class="token keyword">include</span><span class="token punctuation">(</span>path/to/CPM.cmake<span class="token punctuation">)</span>
<span class="token function">CPMAddPackage</span><span class="token punctuation">(</span>
	<span class="token property">NAME</span> warpcore
	GITHUB_REPOSITORY sleeepyjack/warpcore
	GIT_TAG/<span class="token property">VERSION</span> XXXXX
<span class="token punctuation">)</span>

<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>my_target warpcore<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>warpcore是header-only的，无需链接二进制组件，无需build即可使用</li></ul><h3 id="_2-2-build-tests-benchmarks-和-examples" tabindex="-1"><a class="header-anchor" href="#_2-2-build-tests-benchmarks-和-examples"><span>2.2 Build tests, benchmarks, 和 examples</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WARPCORE_ROOT</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> build
<span class="token builtin class-name">cd</span> build
cmake <span class="token punctuation">..</span> <span class="token parameter variable">-DWARPCORE_BUILD_TESTS</span><span class="token operator">=</span>ON <span class="token parameter variable">-DWARPCORE_BUILD_BENCHMARKS</span><span class="token operator">=</span>ON <span class="token parameter variable">-DWARPCORE_BUILD_EXAMPLES</span><span class="token operator">=</span>ON
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-执行结果" tabindex="-1"><a class="header-anchor" href="#_2-3-执行结果"><span>2.3 执行结果</span></a></h3><ul><li><p><strong>T4 平台</strong></p></li><li><table><tr><th style="text-align:left;" rowspan="7" class="confluenceTh">Hardware</th><td style="text-align:left;" rowspan="2" class="confluenceTd"><p><br></p><p>Host</p></td><td style="text-align:left;" class="confluenceTd"><p>CPU</p></td><td style="text-align:left;" class="confluenceTd"><p>Intel(R) Xeon(R) Gold 5218R CPU @ 2.10GHz</p></td></tr><tr><td style="text-align:left;" class="confluenceTd">Memory</td><td style="text-align:left;" class="confluenceTd">187G</td></tr><tr><td style="text-align:left;" rowspan="5" class="confluenceTd"><p><br></p><p>Device</p></td><td style="text-align:left;" class="confluenceTd">GPU</td><td style="text-align:left;" class="confluenceTd">4 *Tesla T4-32GB</td></tr><tr><td style="text-align:left;" class="confluenceTd">Host Interface</td><td style="text-align:left;" class="confluenceTd">-</td></tr><tr><td style="text-align:left;" class="confluenceTd">PCIE Topology</td><td style="text-align:left;" class="confluenceTd">Balance</td></tr><tr><td style="text-align:left;" class="confluenceTd"><span style="color:rgb(23,43,77);">Interconnectivity</span></td><td style="text-align:left;" class="confluenceTd">PCIe, NVLINK</td></tr><tr><td style="text-align:left;" class="confluenceTd">HCA</td><td style="text-align:left;" class="confluenceTd">-</td></tr><tr><th style="text-align:left;" rowspan="4" class="confluenceTh">Software</th><td style="text-align:left;" class="confluenceTd">物理机 OS </td><td style="text-align:left;" colspan="2" class="confluenceTd">CentOS Linux release 7.8.2003 (Core)</td></tr><tr><td style="text-align:left;" class="confluenceTd">CUDAToolkit</td><td style="text-align:left;" colspan="2" class="confluenceTd">11.7.99</td></tr><tr><td style="text-align:left;" class="confluenceTd">Driver</td><td style="text-align:left;" colspan="2" class="confluenceTd">-</td></tr><tr><td style="text-align:left;" colspan="1" class="confluenceTd">Container</td><td style="text-align:left;" colspan="2" class="confluenceTd">NGC nvcr.io/nvidia/merlin/merlin-hugectr:nightly</td></tr></table></li></ul><h4 id="_2-3-1-tests" tabindex="-1"><a class="header-anchor" href="#_2-3-1-tests"><span>2.3.1 tests</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WARPCORE_ROOT</span>/build/tests
./tester
 
<span class="token comment"># ===============================================================================</span>
<span class="token comment"># All tests passed (5421 assertions in 21 test cases)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-benchmarks" tabindex="-1"><a class="header-anchor" href="#_2-3-2-benchmarks"><span>2.3.2 benchmarks</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WARPCORE_ROOT</span>/build/benchmarks
 
./single_value_benchmark
<span class="token comment"># sample_size=134217728</span>
<span class="token comment"># key_capacity=167790344</span>
<span class="token comment"># value_capacity=0</span>
<span class="token comment"># bits_key=32</span>
<span class="token comment"># bits_value=32</span>
<span class="token comment"># mb_keys=512.000000</span>
<span class="token comment"># mb_values=512.000000</span>
<span class="token comment"># key_load=0.799913</span>
<span class="token comment"># value_load=0.000000</span>
<span class="token comment"># density=0.799913</span>
<span class="token comment"># relative_density=0.000000</span>
<span class="token comment"># insert_ms=209.792252</span>
<span class="token comment"># query_ms=116.125404</span>
<span class="token comment"># IPS=639764928 = 0.6 billion</span>
<span class="token comment"># QPS=1155799808 = 1.1 billion</span>
<span class="token comment"># insert_GB/s=4.766620</span>
<span class="token comment"># query_GB/s=8.611380</span>
<span class="token comment"># status=[]</span>
 
./multi_value_benchmark
<span class="token comment"># sample_size=134217728</span>
<span class="token comment"># key_capacity=167790344</span>
<span class="token comment"># value_capacity=0</span>
<span class="token comment"># bits_key=32</span>
<span class="token comment"># bits_value=32</span>
<span class="token comment"># mb_keys=512.000000</span>
<span class="token comment"># mb_values=512.000000</span>
<span class="token comment"># key_load=0.799913</span>
<span class="token comment"># value_load=0.000000</span>
<span class="token comment"># density=0.799913</span>
<span class="token comment"># relative_density=0.000000</span>
<span class="token comment"># insert_ms=262.035522</span>
<span class="token comment"># query_ms=539.936462</span>
<span class="token comment"># IPS=512211968 = 0.5 billion</span>
<span class="token comment"># QPS=248580592 = 0.2 billion</span>
<span class="token comment"># insert_GB/s=3.816277</span>
<span class="token comment"># query_GB/s=1.852070</span>
<span class="token comment"># status=[key not found]</span>
 
./counting_benchmark
<span class="token comment"># sample_size=268435456</span>
<span class="token comment"># key_capacity=37752812</span>
<span class="token comment"># value_capacity=0</span>
<span class="token comment"># bits_key=32</span>
<span class="token comment"># bits_value=0</span>
<span class="token comment"># mb_keys=1024.000000</span>
<span class="token comment"># mb_values=0.000000</span>
<span class="token comment"># key_load=0.888793</span>
<span class="token comment"># value_load=0.000000</span>
<span class="token comment"># density=0.888793</span>
<span class="token comment"># relative_density=0.000000</span>
<span class="token comment"># insert_ms=430.024750</span>
<span class="token comment"># query_ms=230.252548</span>
<span class="token comment"># IPS=624232576  = 0.6 billion</span>
<span class="token comment"># QPS=1165830528  = 1.1 billion</span>
<span class="token comment"># insert_GB/s=2.325448</span>
<span class="token comment"># query_GB/s=4.343057</span>
<span class="token comment"># status=[duplicate key]</span>
 
./bucket_list_benchmark
<span class="token comment"># grow_factor=1.100000</span>
<span class="token comment"># min_slab_size=1</span>
<span class="token comment"># max_slab_size=0</span>
<span class="token comment"># sample_size=134217728</span>
<span class="token comment"># key_capacity=18875992</span>
<span class="token comment"># value_capacity=268435456</span>
<span class="token comment"># bits_key=32</span>
<span class="token comment"># bits_value=32</span>
<span class="token comment"># mb_keys=512.000000</span>
<span class="token comment"># mb_values=512.000000</span>
<span class="token comment"># key_load=0.888812</span>
<span class="token comment"># value_load=0.812500</span>
<span class="token comment"># density=0.246573</span>
<span class="token comment"># relative_density=0.306380</span>
<span class="token comment"># insert_ms=351.723450</span>
<span class="token comment"># query_ms=583.020081</span>
<span class="token comment"># IPS=381600160  = 0.3 billion</span>
<span class="token comment"># QPS=230211152  = 0.2 billion</span>
<span class="token comment"># insert_GB/s=2.843143</span>
<span class="token comment"># query_GB/s=1.715207</span>
<span class="token comment"># status=[duplicate key, key not found]</span>
 
./bloom_filter_benchmark
<span class="token comment"># n=67108864      m=8589934592    k=6     cg=1</span>
<span class="token comment"># Segmentation fault (core dumped)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-3-examples" tabindex="-1"><a class="header-anchor" href="#_2-3-3-examples"><span>2.3.3 examples</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WARPCORE_ROOT</span>/build/examples
 
./advanced_usage_from_device
<span class="token comment"># TIMING: 1.80019 ms (count)</span>
<span class="token comment"># number of unwanted keys: 0</span>
<span class="token comment"># hash table errors: []</span>
 
./basic_usage_from_host
<span class="token comment"># num elements 134217728</span>
<span class="token comment"># capacity 149963432</span>
<span class="token comment"># TIMING: 228.086 ms (insert)</span>
<span class="token comment"># insertion errors: []</span>
<span class="token comment"># load 0.895003</span>
<span class="token comment"># size 134217728</span>
<span class="token comment"># TIMING: 129.443 ms (retrieve)</span>
<span class="token comment"># retrieval errors: []</span>
<span class="token comment"># check result: 0 errors occured</span>
 
./bucket_list_hash_table
<span class="token comment"># TIMING: 10.0107 ms (init_table)</span>
<span class="token comment"># []</span>
<span class="token comment"># TIMING: 1972.49 ms (init_data)</span>
<span class="token comment"># THROUGHPUT: 158.635 ms @ 0.25 GB -&gt; 2.1152e+08 elements/s or 1.57595 GB/s (insert)</span>
<span class="token comment"># table errors []</span>
<span class="token comment"># capacity keys 5243512</span>
<span class="token comment"># capacity values 55924052</span>
<span class="token comment"># unique keys 4194304</span>
<span class="token comment"># values per key 8</span>
<span class="token comment"># total values 33554432</span>
<span class="token comment"># unique keys in table 4194304</span>
<span class="token comment"># total values in table 33554432</span>
<span class="token comment"># density 0.284204</span>
<span class="token comment"># THROUGHPUT: 22.8516 ms @ 0.25 GB -&gt; 1.46836e+09 elements/s or 10.9401 GB/s (retrieve_dummy)</span>
<span class="token comment"># THROUGHPUT: 22.8154 ms @ 0.25 GB -&gt; 1.47069e+09 elements/s or 10.9575 GB/s (retrieve)</span>
<span class="token comment"># retrieved values 33554432</span>
<span class="token comment"># table status [duplicate key]</span>
 
./multi_bucket_hash_table
<span class="token comment"># TIMING: 1.28205 ms (init_table)</span>
<span class="token comment"># TIMING: 49.109 ms (init_data)</span>
<span class="token comment"># THROUGHPUT: 1.94496 ms @ 0.0117188 GB -&gt; 5.39125e+08 elements/s or 6.02519 GB/s (insert)</span>
<span class="token comment"># table errors []</span>
<span class="token comment"># num pairs 1048576</span>
<span class="token comment"># table size 672</span>
<span class="token comment"># key capacity 1048808</span>
<span class="token comment"># load factor 0.000183065</span>
<span class="token comment"># expected unique keys 32</span>
<span class="token comment"># actual unique keys 32</span>
<span class="token comment"># values per key 32768</span>
<span class="token comment"># total values 1048576</span>
<span class="token comment"># capped values 672</span>
<span class="token comment"># retrieved keys 32</span>
<span class="token comment"># THROUGHPUT: 0.146208 ms @ 0.0117188 GB -&gt; 7.17181e+09 elements/s or 80.1512 GB/s (retrieve)</span>
<span class="token comment"># retrieved values 672</span>
<span class="token comment"># table errors []</span>
 
./multi_value_hash_table
<span class="token comment"># TIMING: 3.50371 ms (init_table)</span>
<span class="token comment"># TIMING: 1890.62 ms (init_data)</span>
<span class="token comment"># THROUGHPUT: 89.8948 ms @ 0.25 GB -&gt; 3.73264e+08 elements/s or 2.78103 GB/s (insert)</span>
<span class="token comment"># table errors []</span>
<span class="token comment"># num pairs 33554432</span>
<span class="token comment"># table size 33554432</span>
<span class="token comment"># capacity 41948008</span>
<span class="token comment"># load factor 0.799905</span>
<span class="token comment"># expected unique keys 4194304</span>
<span class="token comment"># actual unique keys 4194304</span>
<span class="token comment"># values per key 8</span>
<span class="token comment"># total values 33554432</span>
<span class="token comment"># THROUGHPUT: 27.7882 ms @ 0.25 GB -&gt; 1.20751e+09 elements/s or 8.99662 GB/s (retrieve_dummy)</span>
<span class="token comment"># THROUGHPUT: 27.7513 ms @ 0.25 GB -&gt; 1.20911e+09 elements/s or 9.00858 GB/s (retrieve)</span>
<span class="token comment"># retrieved values 33554432</span>
<span class="token comment"># table status []</span>
 
./unique_random_generator
<span class="token comment"># THROUGHPUT: 50.6883 ms @ 2 GB -&gt; 5.29581e+09 elements/s or 39.4568 GB/s (generate)</span>
<span class="token comment"># TEST PASSED: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function te(ie,ce){const a=t("ExternalLinkIcon"),i=t("font");return o(),r("div",null,[g,e("p",null,[n("项目链接："),e("a",f,[n("https://github.com/sleeepyjack/warpcore"),s(a)])]),e("p",null,[n("文档："),e("a",y,[n("https://sleeepyjack.github.io/warpcore/index.html"),s(a)])]),e("p",null,[n("文献："),e("a",x,[n("https://arxiv.org/abs/2009.07914"),s(a)])]),e("p",null,[n("参考："),e("a",T,[n("https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html"),s(a)])]),P,w,e("ul",null,[G,e("li",null,[s(i,{color:"orange"},{default:d(()=>[n("注：该项目仍在开发中，将来或有重大更新与重构")]),_:1})]),C]),B,e("ul",null,[e("li",null,[e("p",null,[e("a",R,[U,s(a)]),n(": 存储键，每个键仅出现一次")])]),e("li",null,[e("p",null,[e("a",H,[I,s(a)]),n(": 存储单个键值对，每个键仅出现一次")])]),e("li",null,[e("p",null,[e("a",O,[M,s(a)]),n(": 存储多组键值对，同一个键可对应多个值出现多次")])]),e("li",null,[e("p",null,[e("a",A,[S,s(a)]),n(": MultiValueHashTable的替代结构，将同一key的多个value储存在bucket的链表中")])]),e("li",null,[e("p",null,[e("a",E,[D,s(a)]),n(": MultiValueHashTable的替代结构")])]),e("li",null,[e("p",null,[e("a",N,[j,s(a)]),n(": 记录不同键的出现次数")])]),e("li",null,[e("p",null,[e("a",L,[V,s(a)]),n(": 用于近似成员查询的模式阻塞布隆过滤器，返回查询结果")])]),z,e("li",null,[e("p",null,[n("支持模块化构建自定义数据结构，e.g. "),e("a",W,[n("hash functions"),s(a)]),n(", "),e("a",q,[n("probing schemes"),s(a)]),n(", "),e("a",Q,[n("data layouts"),s(a)])]),X])]),K,e("ul",null,[Z,e("li",null,[e("p",null,[e("a",F,[n("NVIDIA CUDA toolkit/compiler"),s(a)]),n(" v11.2")])]),$,e("li",null,[e("p",null,[e("a",Y,[n("hpc_helpers"),s(a)]),n(" - utils, timers, etc.")])]),e("li",null,[e("p",null,[e("a",J,[n("kiss_rng"),s(a)]),n(" - 快速轻量的 GPU PRNG")])]),e("li",null,[e("p",null,[e("a",ee,[n("CUB"),s(a)]),n(" - GPU 的高吞吐量原语 (已包含在新版 CUDA toolkit中, i.e., v10.2)")])]),e("li",null,[e("p",null,[n("依赖可通过CMake自动管理（使用"),e("a",ne,[n("CMake Package Manager (CPM)"),s(a)]),n("自动从github获取warpcore），但warpcore使用CUDA实现，后续需要修改源码，因此建议手动导入后build项目")])])]),se,e("ul",null,[e("li",null,[n("使用"),e("a",ae,[n("CMake Package Manager (CPM)"),s(a)]),n(" 获取warpcore")])]),le])}const de=c(_,[["render",te],["__file","warpcore_blog.html.vue"]]),pe=JSON.parse(`{"path":"/blogs/warpcore_blog.html","title":"WARPCORE 学习笔记","lang":"zh-CN","frontmatter":{"date":"2022-11-10T00:00:00.000Z","tag":["CUDA","Hash"],"category":["高性能"],"description":"WARPCORE 学习笔记 项目链接：https://github.com/sleeepyjack/warpcore 文档：https://sleeepyjack.github.io/warpcore/index.html 文献：https://arxiv.org/abs/2009.07914 参考：https://docs.nvidia.com/cu...","head":[["meta",{"property":"og:url","content":"https://bradzhone.github.io/blogs/warpcore_blog.html"}],["meta",{"property":"og:site_name","content":"BradZhone's Blog"}],["meta",{"property":"og:title","content":"WARPCORE 学习笔记"}],["meta",{"property":"og:description","content":"WARPCORE 学习笔记 项目链接：https://github.com/sleeepyjack/warpcore 文档：https://sleeepyjack.github.io/warpcore/index.html 文献：https://arxiv.org/abs/2009.07914 参考：https://docs.nvidia.com/cu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"BradZhone"}],["meta",{"property":"article:tag","content":"CUDA"}],["meta",{"property":"article:tag","content":"Hash"}],["meta",{"property":"article:published_time","content":"2022-11-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WARPCORE 学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BradZhone\\",\\"url\\":\\"https://github.com/BradZhone\\"}]}"]]},"headers":[{"level":2,"title":"1 背景","slug":"_1-背景","link":"#_1-背景","children":[{"level":3,"title":"1.1 简介","slug":"_1-1-简介","link":"#_1-1-简介","children":[]},{"level":3,"title":"1.2 数据结构","slug":"_1-2-数据结构","link":"#_1-2-数据结构","children":[]},{"level":3,"title":"1.3 依赖环境","slug":"_1-3-依赖环境","link":"#_1-3-依赖环境","children":[]},{"level":3,"title":"1.4 原理","slug":"_1-4-原理","link":"#_1-4-原理","children":[]},{"level":3,"title":"1.5 性能","slug":"_1-5-性能","link":"#_1-5-性能","children":[]}]},{"level":2,"title":"2 安装与示例","slug":"_2-安装与示例","link":"#_2-安装与示例","children":[{"level":3,"title":"2.1 将warpcore添加到CMake项目","slug":"_2-1-将warpcore添加到cmake项目","link":"#_2-1-将warpcore添加到cmake项目","children":[]},{"level":3,"title":"2.2 Build tests, benchmarks, 和 examples","slug":"_2-2-build-tests-benchmarks-和-examples","link":"#_2-2-build-tests-benchmarks-和-examples","children":[]},{"level":3,"title":"2.3 执行结果","slug":"_2-3-执行结果","link":"#_2-3-执行结果","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.85,"words":2956},"filePathRelative":"blogs/warpcore_blog.md","localizedDate":"2022年11月10日","excerpt":"\\n<p>项目链接：<a href=\\"https://github.com/sleeepyjack/warpcore\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/sleeepyjack/warpcore</a></p>\\n<p>文档：<a href=\\"https://sleeepyjack.github.io/warpcore/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://sleeepyjack.github.io/warpcore/index.html</a></p>","autoDesc":true}`);export{de as comp,pe as data};
